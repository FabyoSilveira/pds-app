import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  padding: 8vh 0 0 5vw;
`;

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #dee2e6;
  margin: 1rem 0;
  width: 85%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 4vh 5vw;
`;

export const FormGroup = styled.div`
  width: 38%;
  padding-bottom: 5vh;
  box-sizing: content-box;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 20vw;
  height: 5.5vh;
  margin-right: -10vw;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  width: 20.5vw;
  height: 6vh;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ReverseButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  width: 20.5vw;
  height: 6vh;
  background-color: #ffffff;
  color: #e04e5c;
  border: 1px solid #e04e5c;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &:hover {
    background-color: #e04e5c;
    color: #ffffff;
  }
`;