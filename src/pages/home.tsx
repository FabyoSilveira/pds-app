import { Loading } from '@/components/Loading'
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      {!loading ? (
        <h1>{`Welcome to Grade Rank, ${user?.login}!`}</h1>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Home
