import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

export const EvaluationDetails: NextPage = () => {
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
        <PageLayout user={user?.name} activeMenuItem={2}>
          <h1>{`Aqui você poderá ver uma avaliação, ${user?.name}!`}</h1>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default EvaluationDetails
