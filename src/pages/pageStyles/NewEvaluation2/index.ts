import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  margin-bottom: 3rem;
  font-weight: 600;
  color: var(--blue);
`;

export const QuestionContainer = styled.div`
  margin-bottom: 2.5rem;
`;

export const QuestionLabel = styled.label`
  font-weight: 600;
`;

export const RadioButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`;

export const NextPageButton = styled.button`
  width: 15rem;
  padding: 0.751rem;
  background-color: #007bff;
  margin-top: 1rem;
  margin-bottom: 8rem;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  transition: background-color 0.15s ease-in-out;
    
  &:hover {
    background-color: #0056b3;
`;
