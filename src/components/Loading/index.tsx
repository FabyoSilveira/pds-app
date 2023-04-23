import { CircularProgress } from '@mui/material'
import { LoadingWrapper } from './style'

export const Loading = () => {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  )
}
