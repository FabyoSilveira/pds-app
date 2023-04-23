import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import { LoggedUser } from './type'

export const setUser = (user: LoggedUser): void => {
  const userCookie = JSON.stringify(user)

  setCookie('user', userCookie)
}

export const getUser = (): LoggedUser | null => {
  const userCookie = getCookie('user')

  if (!userCookie) {
    return null
  }

  const loggedUser: LoggedUser = JSON.parse(userCookie as string) as LoggedUser

  return loggedUser
}

export const removeUser = (): void => {
  deleteCookie('user')
}
