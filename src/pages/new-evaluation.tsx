import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import {
  Title,
  Form,
  Label,
  Select,
  Button,
  LoadingContainer,
} from './pageStyles/NewEvaluation'
import api from '@/api'
import { ErrorSpanStyle } from './pageStyles/Login'

export const NewEvaluation: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const loggedUser = getUserCookie()

    if (!loggedUser) {
      router.push('/')
    } else {
      setUser(loggedUser as LoggedUser)
      setLoading(false)
    }

    api
      .get('CoursesList')
      .then((res) => {
        setCoursesList(res.data)
        setFetching(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const [loading, setLoading] = useState(true)
  const [fetching, setFetching] = useState(true)
  const [user, setUser] = useState<LoggedUser>()
  const [error, setError] = useState(false)
  const [coursesList, setCoursesList] = useState([])
  const [selectedDiscipline, setSelectedDiscipline] = useState(-2)

  const handleDisciplineChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedDiscipline(Number(event.target.value))
    setError(false)
  }

  const handleNextPageClick = () => {
    if (selectedDiscipline < 0) {
      setError(true)
      return
    }

    router.push(`/new-evaluation-2/${selectedDiscipline}`)
  }

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={3}>
          <Title>Nova Avaliação</Title>
          {!fetching ? (
            <>
              <Form>
                <Label>Qual disciplina deseja avaliar?</Label>
                <Select
                  value={selectedDiscipline}
                  onChange={handleDisciplineChange}
                >
                  <option value={-1}>Selecione a disciplina</option>
                  {coursesList.map((item: any, id) => {
                    return (
                      <option key={id} value={item?.id}>
                        {item?.name}
                      </option>
                    )
                  })}
                </Select>
                {error ? (
                  <ErrorSpanStyle>
                    Selecione uma disciplina para avaliar!
                  </ErrorSpanStyle>
                ) : (
                  <></>
                )}
                <Button onClick={handleNextPageClick}>AVALIAR</Button>
              </Form>
            </>
          ) : (
            <Loading />
          )}
        </PageLayout>
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </>
  )
}

export default NewEvaluation
