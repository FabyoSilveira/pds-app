import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import {
  DivisorDiv,
  LogoutIcon,
  MenuWrapperDiv,
  UserLogoutSection,
  UserSectionDiv,
} from './style'
import { MenuProps } from './type'
import { ListItem } from './ListItem'
import { removeUserCookie } from '@/utils/auth'
import { useRouter } from 'next/router'

const menuItems = [
  {
    text: 'Meu perfil',
    icon: 'user',
    href: '/home',
  },
  {
    text: 'Minhas avaliações',
    icon: 'chat',
    href: '/my-evaluations',
  },
  {
    text: 'Explorar avaliações',
    icon: 'list',
    href: '/explore-evaluations',
  },
  {
    text: 'Nova avaliação',
    icon: 'plus',
    href: '/new-evaluation',
  },
]

export const Menu = ({ user, activeItem }: MenuProps) => {
  const router = useRouter()

  const logout = (): void => {
    removeUserCookie()
    router.push('/')
  }

  return (
    <MenuWrapperDiv>
      <UserSectionDiv>
        <FontAwesomeIcon icon={faUser} size='3x' />
        <UserLogoutSection>
          <div
            style={{
              width: '100px',
            }}
            title={user}
          >
            <h3>{user}</h3>
          </div>
          <LogoutIcon
            icon={faRightFromBracket}
            onClick={() => {
              logout()
            }}
          />
        </UserLogoutSection>
      </UserSectionDiv>
      <DivisorDiv>
        <hr style={{ width: '100%', border: '1px solid' }} />
      </DivisorDiv>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {menuItems.map((item, index) => {
          return (
            <ListItem
              text={item.text}
              active={index == activeItem}
              icon={item.icon}
              href={item.href}
            />
          )
        })}
      </div>
    </MenuWrapperDiv>
  )
}
