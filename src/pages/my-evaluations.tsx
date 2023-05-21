import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import { 
  tableStyles
} from './pageStyles/MyEvaluations';


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
  }, [])

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<LoggedUser>()

  
  const data = [
    {
      date: '18/03/20',
      subject: 'Programação e Desenvolvimento de Software I (DCC203)',
      professor: 'Gertrudes',
      details: 'Ver Detalhes'
    },
    {
      date: '23/09/22',
      subject: 'Equações Diferenciais C (MAT040)',
      professor: 'Richarlisson',
      details: 'Ver Detalhes'
    },
    {
      date: '01/04/23',
      subject: 'Fundamentos de Sistemas Paralelos e Distribuídos (DCC641)',
      professor: 'Pedro Pascal',
      details: 'Ver Detalhes'
    }
  ];

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={1}>
          <h1>{`Minhas Avaliações`}</h1>
          <>
            <style>{tableStyles}</style>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="data">Data</th>
                  <th className="materia">Matéria</th>
                  <th className="professor">Professor</th>
                  <th className="detalhes"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td className="data data-rows">{item.date}</td>
                    <td className="materia">{item.subject}</td>
                    <td className="professor">{item.professor}</td>
                    <td className="detalhes"><a href="#">{item.details}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default MyEvaluations
