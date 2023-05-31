import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import { tableStyles } from './pageStyles/MyEvaluations'
import api from '@/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const MyEvaluations: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const loggedUser = getUserCookie()

    if (!loggedUser) {
      router.push('/')
    } else {
      setUser(loggedUser as LoggedUser)
      setLoading(false)
    }

    fetchEvaluations(loggedUser?.id)
  }, [])

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<LoggedUser>()
  const [fetching, setFetching] = useState(true)
  const [evaluations, setEvaluations] = useState([])

  const fetchEvaluations = (userId: number | undefined) => {
    api
      .get(`${userId}`)
      .then((res) => {
        setFetching(false)
        setEvaluations(res.data)
      })
      .catch((err) => {
        console.error(err)
        setEvaluations([])
        setFetching(false)
      })
  }

  const deleteEvaluation = (idCourse: number) => {
    setFetching(true)
    api
      .delete(`${user?.id}/${idCourse}`)
      .then((res) => {
        fetchEvaluations(user?.id)
      })
      .catch((err) => {
        console.error(err)
        setFetching(false)
      })
  }

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={1}>
          <h1>{`Minhas Avaliações`}</h1>
          {!fetching ? (
            <>
              {evaluations.length === 0 ? (
                <h2 style={{ color: 'var(--red)' }}>
                  Avalie uma disciplina para visualizar suas avaliações aqui!{' '}
                  {';)'}
                </h2>
              ) : (
                <>
                  <style>{tableStyles}</style>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th className='data'>Data</th>
                        <th className='materia'>Matéria</th>
                        <th className='professor'>Professor</th>
                        <th className='detalhes'>Excluir</th>
                      </tr>
                    </thead>
                    {evaluations.map((evaluation: any, index) => {
                      return (
                        <tbody>
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'even' : 'odd'}
                          >
                            <td className='data data-rows'>
                              {String(
                                new Date(
                                  evaluation?.evaluationDate,
                                ).toLocaleString('pt-BR'),
                              )}
                            </td>
                            <td className='materia'>
                              {evaluation?.nameCourse}
                            </td>
                            <td className='professor'>
                              {evaluation?.nameProfessor === null
                                ? 'Não cadastrado'
                                : evaluation?.nameProfessor}
                            </td>
                            <td className='detalhes'>
                              <FontAwesomeIcon
                                style={{ cursor: 'pointer' }}
                                icon={faTrash}
                                color={'red'}
                                onClick={() => {
                                  deleteEvaluation(evaluation?.idCourse)
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      )
                    })}
                  </table>
                </>
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

export default MyEvaluations
