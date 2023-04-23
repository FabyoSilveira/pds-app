import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import styled from 'styled-components'

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

export const LoginButton = styled(Button)`
  height: 50px;
  margin-top: 20px;
  background-color: var(--blue);
`

export const SubscribeButton = styled(Button)`
  height: 50px;
  margin-top: 20px;
  background-color: var(--yellow);
  :hover {
    background-color: var(--darkYellow);
  }
`

export const ErrorSpanStyle = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--red);
`
