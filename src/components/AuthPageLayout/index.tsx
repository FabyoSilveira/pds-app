import { LoginBoxDiv, AuthWrapperBoxDiv, BackgroundAuthLayout } from './style'
import { AuthPageLayoutProps } from './type'

export const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <BackgroundAuthLayout>
        <AuthWrapperBoxDiv>
          <img src={'/assets/logoPNG.png'} width='425px' height='150px' />
          <LoginBoxDiv>{children}</LoginBoxDiv>
        </AuthWrapperBoxDiv>
      </BackgroundAuthLayout>
    </div>
  )
}

export default AuthPageLayout
