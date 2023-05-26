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
import api from '@/api'

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
  const [error, setError] = useState({ active: false, message: '' })
  const [login, setLogin] = useState({ user: '', password: '' })

  const onSubmit = () => {
    if (!login.user || !login.password) {
      setError({
        active: true,
        message: 'Preencha os campos obrigatórios!',
      })
      return
    }

    api
      .post('Auth', { email: login.user, password: login.password })
      .then((res) => {
        setUserCookie({
          id: res.data.id,
          name: res.data.name,
          registration: res.data.registration,
          email: res.data.email,
          password: res.data.password,
        } as LoggedUser)
        router.push('/home')
      })
      .catch((err) => {
        setError({
          active: true,
          message: 'Usuário ou senha incorretos!',
        })
      })
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
            error={error.active}
            value={login.user}
            onChange={(e: any) => {
              setError({ active: false, message: '' })
              setLogin((prev) => ({ ...prev, user: e.target.value }))
            }}
          />
          <Input
            id='outlined-basic'
            label='Senha'
            variant='outlined'
            type='password'
            error={error.active}
            value={login.password}
            onChange={(e) => {
              setError({ active: false, message: '' })
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }}
          />
          {error.active ? (
            <ErrorSpanStyle>{error.message}</ErrorSpanStyle>
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
