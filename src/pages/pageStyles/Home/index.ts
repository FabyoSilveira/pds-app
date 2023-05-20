import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  padding: 2rem 0 0 5rem;
`;

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #dee2e6;
  margin: 2rem 0 1rem 0;
  width: 85%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-left: 5rem;
`;

export const FormGroup = styled.div`
  width: 34%;
  padding-bottom: 5vh;
  box-sizing: content-box;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 19rem;
  height: 2.75rem;
  margin-right: -12rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding-left: 10px;

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  width: 19.4rem;
  height: 3rem;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ReverseButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  width: 19.4rem;
  height: 3rem;
  margin-top: 10px;
  background-color: #ffffff;
  color: #e04e5c;
  border: 1px solid #e04e5c;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &:hover {
    background-color: #e04e5c;
    color: #ffffff;
  }
`;