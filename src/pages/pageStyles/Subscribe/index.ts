import styled from 'styled-components'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const InputSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

export const SubscribeButton = styled(Button)`
  height: 50px;
  margin-top: 20px;
  background-color: var(--blue);
`

export const ErrorSpanStyle = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: var(--red);
`
