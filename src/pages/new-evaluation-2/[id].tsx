import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import {
  Title,
  Subtitle,
  QuestionContainer,
  QuestionLabel,
  RadioButtonsContainer,
  NextPageButton,
} from '../pageStyles/NewEvaluation2'
import api from '@/api'
import { ErrorSpanStyle } from '../pageStyles/Login'

type EvaluationPayload = {
  idUser?: number
  idCourse?: number
  evaluationRequest: Answer[]
}

type Answer = {
  idQuestion?: number
  valueEvaluation?: number
}

export const NewEvaluation2: NextPage = () => {
  const router = useRouter()
  const { id: courseId } = router.query

  useEffect(() => {
    const loggedUser = getUserCookie()

    if (!loggedUser) {
      router.push('/')
    } else {
      setUser(loggedUser as LoggedUser)
      setLoading(false)
    }

    getCourseAndQuestions()
  }, [])

  const getCourseAndQuestions = () => {
    api
      .get(`Course?id=${courseId}`)
      .then((res) => {
        setCourse(res.data)
      })
      .catch((err) => {
        console.error(err)
      })

    api
      .get('Question')
      .then((res) => {
        setQuestions(res.data)
        setFetching(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const [loading, setLoading] = useState(true)
  const [fetching, setFetching] = useState(true)
  const [user, setUser] = useState<LoggedUser>()
  const [course, setCourse] = useState<any>({})
  const [questions, setQuestions] = useState<any>([])
  const [payload, setPayload] = useState<EvaluationPayload>()
  const [error, setError] = useState({ active: false, message: '' })

  const handleNextPageClick = () => {
    if (!isEveryAnswerFilled()) {
      setError({
        active: true,
        message: 'Preencha todas as perguntas para avaliar!',
      })
      return
    }

    api
      .post('Evaluation', payload)
      .then((res) => {
        console.log(res)
        router.push('/my-evaluations')
      })
      .catch((err) => {
        console.error(err)
        setError({
          active: true,
          message:
            'Houve um problema ao salvar sua avaliação, tente novamente!',
        })
      })
  }

  const isEveryAnswerFilled = (): boolean => {
    var filled = true
    payload?.evaluationRequest.map((answer: any) => {
      if (answer?.valueEvaluation < 0) {
        filled = false
      }
    })

    return filled
  }

  useEffect(() => {
    if (!course || !questions) {
      return
    }

    const auxPayloadStruct: EvaluationPayload = {
      evaluationRequest: [],
    } as EvaluationPayload

    questions.map((question: any) => {
      auxPayloadStruct?.evaluationRequest?.push({
        idQuestion: question?.idQuestion,
        valueEvaluation: -1,
      })
    })

    auxPayloadStruct.idCourse = Number(courseId)
    auxPayloadStruct.idUser = Number(user?.id)
    setPayload(auxPayloadStruct)
  }, [course, questions])

  useEffect(() => {
    console.log(payload)
  }, [payload])

  const setAnswer = (ev: any, id: any) => {
    setError({ active: false, message: '' })
    setPayload((prevState) => {
      const newArray = prevState?.evaluationRequest
      newArray[id].valueEvaluation = Number(ev.target.value)
      return {
        ...prevState,
        evaluationRequest: newArray,
      }
    })
  }

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={3}>
          <Title>Nova Avaliação</Title>
          {!fetching ? (
            <>
              <Title style={{ fontSize: '1.4rem', color: 'var(--textColor)' }}>
                {course?.name}
              </Title>
              <Subtitle>Sobre a disciplina</Subtitle>
              {questions.map((question: any, id: any) => {
                return (
                  <QuestionContainer>
                    <QuestionLabel>{question?.question}</QuestionLabel>
                    <RadioButtonsContainer>
                      <label htmlFor={`question1-concordo-totalmente-${id}`}>
                        <input
                          id={`question1-concordo-totalmente-${id}`}
                          type='radio'
                          name={`question${id}`}
                          value={4}
                          onChange={(ev) => {
                            setAnswer(ev, id)
                          }}
                        />
                        Concordo totalmente
                      </label>
                      <label htmlFor={`question1-concordo-${id}`}>
                        <input
                          id={`question1-concordo-${id}`}
                          type='radio'
                          name={`question${id}`}
                          value={3}
                          onChange={(ev) => {
                            setAnswer(ev, id)
                          }}
                        />
                        Concordo
                      </label>
                      <label htmlFor={`question1-nao-sei-${id}`}>
                        <input
                          id={`question1-nao-sei-${id}`}
                          type='radio'
                          name={`question${id}`}
                          value={2}
                          onChange={(ev) => {
                            setAnswer(ev, id)
                          }}
                        />
                        Neutro
                      </label>
                      <label htmlFor={`question1-discordo-${id}`}>
                        <input
                          id={`question1-discordo-${id}`}
                          type='radio'
                          name={`question${id}`}
                          value={1}
                          onChange={(ev) => {
                            setAnswer(ev, id)
                          }}
                        />
                        Discordo
                      </label>
                      <label htmlFor={`question1-discordo-totalmente-${id}`}>
                        <input
                          id={`question1-discordo-totalmente-${id}`}
                          type='radio'
                          name={`question${id}`}
                          value={0}
                          onChange={(ev) => {
                            setAnswer(ev, id)
                          }}
                        />
                        Discordo totalmente
                      </label>
                    </RadioButtonsContainer>
                  </QuestionContainer>
                )
              })}
              <NextPageButton onClick={handleNextPageClick}>
                SALVAR AVALIAÇÃO
              </NextPageButton>
              {error.active ? (
                <ErrorSpanStyle style={{ marginLeft: '10px' }}>
                  {error.message}
                </ErrorSpanStyle>
              ) : (
                <></>
              )}
            </>
          ) : (
            <Loading />
          )}
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default NewEvaluation2
