export const Button = ({ props, children }: any): JSX.Element => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  )
}
