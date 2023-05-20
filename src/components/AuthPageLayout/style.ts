import styled from 'styled-components'

export const BackgroundAuthLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to right, var(--darkBlue), var(--blue));
`

export const AuthWrapperBoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 75px;
  width: calc(100vw - 450px);
  border-radius: 30px;
  background-color: var(--white);
`

export const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
`
