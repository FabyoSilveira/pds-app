import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  ErrorSpanStyle,
  LoginBoxDiv,
  StyledButton,
  StyledInput,
  WrapperDiv,
} from './pageStyles'
import { Input } from '@/components/Input'

const mockUser = {
  user: 'fabyosilveira',
  password: '123456',
}

export const Login: NextPage = () => {
  const [error, setError] = useState(false)
  const [login, setLogin] = useState({ user: '', password: '' })

  const router = useRouter()

  const onSubmit = () => {
    if (login.user !== mockUser.user || login.password !== mockUser.password) {
      setError(true)
      return
    }

    router.push('/mural')
  }

  return (
    <>
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
    </>
  )
}

export default Login
