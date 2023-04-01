import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import styled from 'styled-components'

export const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
`

export const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  @media (max-width: 755px) {
    justify-content: start;
  }
`

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

export const StyledButton = styled(Button)`
  height: 50px;
  background-color: var(--blue);
`
