import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import styled from 'styled-components'

export const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  min-width: 100vw;
  min-height: 100vh;
`

export const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
`

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

export const StyledButton = styled(Button)`
  height: 50px;
  margin-top: 20px;
  background-color: var(--blue);
`

export const ErrorSpanStyle = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--red);
`
