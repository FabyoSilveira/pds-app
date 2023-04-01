import { TextField as MUIInput, TextFieldProps } from '@mui/material'

export const Input = (props: TextFieldProps): JSX.Element => {
  return <MUIInput {...props} />
}
