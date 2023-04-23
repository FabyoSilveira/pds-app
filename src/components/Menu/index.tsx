import { DivisorDiv, MenuWrapperDiv, UserSectionDiv } from './style'
import { MenuProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ListItem } from './ListItem'

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
  return (
    <MenuWrapperDiv>
      <UserSectionDiv>
        <FontAwesomeIcon icon={faUser} size='4x' />
        <h3>{user}</h3>
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
