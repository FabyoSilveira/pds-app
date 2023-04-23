import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  StyledInput,
  ErrorSpanStyle,
  SubscribeButton,
  InputSectionDiv,
} from './pageStyles/Subscribe'
import { Input } from '@/components/Input'
import { Loading } from '@/components/Loading'
import AuthPageLayout from '@/components/AuthPageLayout'

export const Subscribe: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setLoading(false)
  }, [])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [account, setAccount] = useState({
    name: '',
    email: '',
    registration: '',
    password: '',
  })

  const onSubmit = () => {
    if (
      !account.name ||
      !account.email ||
      !account.registration ||
      !account.password
    ) {
      setError(true)
      return
    }

    router.push('/')
  }

  return (
    <>
      {!loading ? (
        <AuthPageLayout>
          <h2>Crie sua conta para começar a avaliar!</h2>
          <InputSectionDiv>
            <StyledInput
              id='outlined-basic'
              label='Nome'
              variant='outlined'
              error={error && !account.name}
              value={account.name}
              onChange={(e: any) => {
                setError(false)
                setAccount((prev) => ({ ...prev, name: e.target.value }))
              }}
            />
            <Input
              id='outlined-basic'
              label='Email'
              variant='outlined'
              error={error && !account.email}
              value={account.email}
              onChange={(e) => {
                setError(false)
                setAccount((prev) => ({ ...prev, email: e.target.value }))
              }}
            />
          </InputSectionDiv>
          <InputSectionDiv>
            <StyledInput
              id='outlined-basic'
              label='Matrícula'
              variant='outlined'
              error={error && !account.registration}
              value={account.registration}
              onChange={(e: any) => {
                setError(false)
                setAccount((prev) => ({
                  ...prev,
                  registration: e.target.value,
                }))
              }}
            />
            <Input
              id='outlined-basic'
              label='Senha'
              variant='outlined'
              type='password'
              error={error && !account.password}
              value={account.password}
              onChange={(e) => {
                setError(false)
                setAccount((prev) => ({ ...prev, password: e.target.value }))
              }}
            />
          </InputSectionDiv>
          {error ? (
            <ErrorSpanStyle>
              Preencha todos os dados para se cadastrar!
            </ErrorSpanStyle>
          ) : (
            <></>
          )}
          <SubscribeButton variant='contained' onClick={onSubmit}>
            Cadastrar
          </SubscribeButton>
        </AuthPageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Subscribe
