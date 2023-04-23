import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  ErrorSpanStyle,
  LoginButton,
  StyledInput,
  SubscribeButton,
} from './pageStyles/Login'
import { Input } from '@/components/Input'
import { getUserCookie, setUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'
import { Loading } from '@/components/Loading'
import AuthPageLayout from '@/components/AuthPageLayout'

const mockUser: LoggedUser = {
  id: '54321',
  name: 'Fabyo Silveira',
  login: 'fabyosilveira',
  password: '123456',
}

export const Login: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const loggedUser = getUserCookie()

    if (loggedUser) {
      router.push('/home')
    } else {
      setLoading(false)
    }
  }, [])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [login, setLogin] = useState({ user: '', password: '' })

  const onSubmit = () => {
    if (login.user !== mockUser.login || login.password !== mockUser.password) {
      setError(true)
      return
    }

    setUserCookie(mockUser)
    router.push('/home')
  }

  const goToSubscriptionPage = () => {
    router.push('/subscribe')
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!loading ? (
        <AuthPageLayout>
          <h2>Faça seu login para começar a avaliar</h2>
          <StyledInput
            id='outlined-basic'
            label='Login'
            variant='outlined'
            error={error}
            value={login.user}
            onChange={(e: any) => {
              setError(false)
              setLogin((prev) => ({ ...prev, user: e.target.value }))
            }}
          />
          <Input
            id='outlined-basic'
            label='Senha'
            variant='outlined'
            type='password'
            error={error}
            value={login.password}
            onChange={(e) => {
              setError(false)
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }}
          />
          {error ? (
            <ErrorSpanStyle>Usuário ou senha incorretos!</ErrorSpanStyle>
          ) : (
            <></>
          )}
          <LoginButton variant='contained' onClick={onSubmit}>
            ENTRAR
          </LoginButton>
          <span style={{ marginTop: '100px', fontWeight: 'bold' }}>
            Não possui conta?
          </span>
          <SubscribeButton
            variant='contained'
            onClick={() => {
              goToSubscriptionPage()
            }}
          >
            Criar conta
          </SubscribeButton>
        </AuthPageLayout>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Login
