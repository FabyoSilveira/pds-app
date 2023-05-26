import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 1rem;
`;

export const Select = styled.select`
  width: 20rem;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 5rem;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.4rem;
`;

export const Button = styled.button`
  width: 15rem;
  padding: 0.75rem;
  background-color: #007bff;
  margin-top: 2rem;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  transition: background-color 0.15s ease-in-out;
    
  &:hover {
    background-color: #0056b3;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
