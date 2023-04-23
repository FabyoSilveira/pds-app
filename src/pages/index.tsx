import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  ErrorSpanStyle,
  LoginBoxDiv,
  StyledButton,
  StyledInput,
  WrapperDiv,
} from './pageStyles'
import { Input } from '@/components/Input'
import { getUser, setUser } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'
import { Loading } from '@/components/Loading'

const mockUser: LoggedUser = {
  id: '54321',
  login: 'fabyosilveira',
  password: '123456',
}

export const Login: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const loggedUser = getUser()

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

    setUser(mockUser)
    router.push('/home')
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!loading ? (
        <WrapperDiv>
          <img src={'/assets/logoPNG.png'} width='425px' height='150px' />
          <LoginBoxDiv>
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
            <StyledButton variant='contained' onClick={onSubmit}>
              ENTRAR
            </StyledButton>
          </LoginBoxDiv>
        </WrapperDiv>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Login
