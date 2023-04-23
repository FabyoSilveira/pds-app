import { Menu } from '../Menu'
import { NavBar } from '../NavBar'
import { PageLayoutProps } from './type'

export const PageLayout = ({
  children,
  user,
  activeMenuItem,
}: PageLayoutProps) => {
  return (
    <>
      <NavBar user={user} />
      <div style={{ display: 'flex' }}>
        <Menu user={user} activeItem={activeMenuItem} />
        <div style={{ paddingLeft: '30px' }}>{children}</div>
      </div>
    </>
  )
}
