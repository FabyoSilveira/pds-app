import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MenuWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: calc(100vh - 100px);
  box-shadow: 5px 0px 5px -2px rgba(204, 204, 204, 1);
`

export const UserSectionDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 1.25rem;
  gap: 1.25rem;
`

export const UserLogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const LogoutIcon = styled(FontAwesomeIcon)`
  transition: 0.15s ease-in;
  :hover {
    cursor: pointer;
    color: var(--blue);
    font-size: 20px;
  }
`

export const DivisorDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--gray);
  margin-top: 15px;
  opacity: 0.4;
`
