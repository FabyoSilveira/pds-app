import { ButtonProps, Button as MUIButton } from '@mui/material'

export const Button = (props: ButtonProps): JSX.Element => {
  return <MUIButton {...props} />
}
