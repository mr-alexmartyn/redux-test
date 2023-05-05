import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1px;
  max-width: 300px;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: start;
  justify-content: start;
`;

export const Input = styled.input`
  width: 200px;
  border: 1px solid orange;
  border-radius: 3px;
  margin-left: auto;
  margin-right: 0px;
`;

export const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  width: 50px;
  border: none;
  border-radius: 3px;
  background-color: orange;
  cursor: pointer;
`;
