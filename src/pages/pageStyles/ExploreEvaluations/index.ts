import styled from 'styled-components'

export const FilterRow = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: space-between;
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  label {
    margin-right: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  select {
    margin-right: 2rem;
    cursor: pointer;
    width: 8.5rem;
    padding: 0.5rem 1rem 0.5rem 0.75rem;
    border-radius: 4px;
    border: 1px solid #ced4da;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23333' d='M5 6L0 1h10L5 6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 10px;
  }
`

export const Search = styled.div`
  display: flex;
  flex-direction: column;

  input[type="text"] {
    width: 15rem;
    margin-right: 5px;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ced4da;
  }

  button {
    padding: 0.55rem 1rem;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    
    &:hover {
      background-color: #0056b3;
  }

`

export const CardColumns = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.75rem;
  margin-bottom: 5rem;
`

export const Card = styled.div`
  padding: 20px;
  border: 1px solid #ced4da;
  border-radius: 0.5rem;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  a {
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    margin-top: 10px;
    transition: color 0.15s ease-in-out;
    
    &:hover {
      color: #0056b3;
  }
`
