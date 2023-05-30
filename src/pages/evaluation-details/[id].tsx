import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import {
  StyledH3,
  StyledA,
  StyledH5,
  StyledProgress,
  StyledProgressBarContainer,
  StyledDiv,
  PageWidth,
} from '../pageStyles/EvaluationDetails'
import api from '@/api'

const MAX_GRADE = 4

export const EvaluationDetails: NextPage = () => {
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
  }, [])

  useEffect(() => {
    if (courseId) {
      api
        .get(`Course?id=${courseId}`)
        .then((res) => {
          setCourse(res.data)
        })
        .catch((err) => {
          console.error(err)
        })

      api
        .get(`CourseEvaluation?id=${courseId}`)
        .then((res) => {
          setEvaluation(res.data)
          setFetching(false)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [courseId])

  const [loading, setLoading] = useState(true)
  const [fetching, setFetching] = useState(true)
  const [user, setUser] = useState<LoggedUser>()
  const [course, setCourse] = useState()
  const [evaluation, setEvaluation] = useState([])

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={2}>
          {!fetching ? (
            <>
              <h1>{course?.name}</h1>
              <StyledH3>
                Professor(a) Relacionado(a):{' '}
                <StyledA>{course?.nameProfessor}</StyledA>
              </StyledH3>
              <br />
              <StyledH3>Média das Respostas:</StyledH3>
              <StyledH5>
                Quanto maior a porcentagem % mais pessoas concordaram
              </StyledH5>
              <PageWidth>
                {evaluation?.length === 0 && courseId ? (
                  <h1 style={{ color: 'var(--red)' }}>
                    Essa matéria ainda não foi avaliada por nenhum aluno!
                  </h1>
                ) : (
                  evaluation?.map((item) => {
                    return (
                      <StyledProgressBarContainer>
                        <StyledDiv>
                          <span>{item?.question}</span>
                        </StyledDiv>
                        <div>
                          <StyledProgress value={item?.value} max={4} />
                          <span>
                            {((item?.value / MAX_GRADE) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </StyledProgressBarContainer>
                    )
                  })
                )}
              </PageWidth>
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

export default EvaluationDetails
