import { ListItemWrapper } from './style'
import { ListItemProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faComments,
  faList,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const menuIcons: any = {
  user: faUser,
  chat: faComments,
  list: faList,
  plus: faPlus,
}

export const ListItem = ({ text, icon, active, href }: ListItemProps) => {
  const router = useRouter()

  const onClickItem = () => {
    console.log(href)
    //router.push(href)
  }

  return (
    <ListItemWrapper
      active={active}
      onClick={() => {
        onClickItem()
      }}
    >
      <FontAwesomeIcon icon={menuIcons[icon]} />
      <span>{text}</span>
    </ListItemWrapper>
  )
}
