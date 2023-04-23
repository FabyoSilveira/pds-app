import { NavbarWrapperDiv, UserNameSpan, WelcomeUserSpan } from './style'
import { NavBarProps } from './type'

export const NavBar = ({ user }: NavBarProps) => {
  return (
    <NavbarWrapperDiv>
      <img src={'/assets/logoDarkBg.png'} width='200px' height='64px' />
      <WelcomeUserSpan>
        Bem vindo, <UserNameSpan>{user}</UserNameSpan> !
      </WelcomeUserSpan>
    </NavbarWrapperDiv>
  )
}
