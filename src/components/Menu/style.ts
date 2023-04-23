import styled from 'styled-components'

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
  padding-left: 20px;
  margin-top: 20px;
  gap: 20px;
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
