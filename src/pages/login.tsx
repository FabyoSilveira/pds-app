import { NextPage } from 'next'
import {
  LoginBoxDiv,
  StyledButton,
  StyledInput,
  WrapperDiv,
} from './pageStyles/login'

export const Login: NextPage = () => {
  return (
    <>
      <WrapperDiv>
        <img src={'/assets/logoSVG.svg'} width='400px' />
        <LoginBoxDiv>
          <h3>Faça seu login para começar a avaliar</h3>
          <StyledInput id='outlined-basic' label='Login' variant='outlined' />
          <StyledInput
            id='outlined-basic'
            label='Senha'
            variant='outlined'
            type='password'
          />
          <StyledButton variant='contained'>ENTRAR</StyledButton>
        </LoginBoxDiv>
      </WrapperDiv>
    </>
  )
}

export default Login
