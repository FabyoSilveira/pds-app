import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState, useSyncExternalStore } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'
import {
  FilterRow,
  Filter,
  Search,
  CardColumns,
  Card,
} from './pageStyles/ExploreEvaluations'
import api from '@/api'
import { Label } from './pageStyles/Home'

export const ExploreEvaluations: NextPage = () => {
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
  const [coursesList, setCoursesList] = useState([])
  const [filter, setFilter] = useState('')

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={2}>
          <h1>{`Explorar Avaliações`}</h1>
          <FilterRow>
            <Search>
              <Label style={{ marginBottom: '5px' }}>Filtro dinâmico</Label>
              <input
                type='text'
                placeholder='Só digite e vamos filtrar para você! :)'
                onChange={(ev) => {
                  setFilter(ev.target.value)
                }}
              />
            </Search>
          </FilterRow>
          {!fetching ? (
            <>
              <CardColumns>
                {coursesList
                  ?.filter((course: any) =>
                    course?.name
                      .toLocaleLowerCase()
                      .includes(filter.toLocaleLowerCase()),
                  )
                  .map((item: any, id) => {
                    return (
                      <Card key={id}>
                        <h2>{item?.name}</h2>
                        <h3>{item?.code}</h3>
                        {item?.evaluationTimes === 1 ? (
                          <p>{item?.evaluationTimes} avaliação</p>
                        ) : (
                          <p>{item?.evaluationTimes} avaliações</p>
                        )}
                        <a href={`/evaluation-details/${item?.id}`}>
                          Ver Detalhes
                        </a>
                      </Card>
                    )
                  })}
              </CardColumns>
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

export default ExploreEvaluations
