import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import { LoggedUser } from './type'

export const setUserCookie = (user: LoggedUser): void => {
  const userCookie = JSON.stringify(user)

  setCookie('user', userCookie)
}

export const getUserCookie = (): LoggedUser | null => {
  const userCookie = getCookie('user')

  if (!userCookie) {
    return null
  }

  const loggedUser: LoggedUser = JSON.parse(userCookie as string) as LoggedUser

  return loggedUser
}

export const removeUserCookie = (): void => {
  deleteCookie('user')
}
