import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Home: NextPage = () => {
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

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={0}>
          <h1>{`Bem vindo ao seu perfil, ${user?.name}!`}</h1>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Home
