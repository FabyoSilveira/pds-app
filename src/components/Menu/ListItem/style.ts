import styled from 'styled-components'

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 10px 15px 20px;
  color: ${(props) => (props.active ? 'var(--blue)' : 'inherit')};

  :hover {
    cursor: pointer;
    background-color: var(--gray);
  }
`
