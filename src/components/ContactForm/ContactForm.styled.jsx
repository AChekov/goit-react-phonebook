import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  padding: 0;
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 15px 0 15px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  color: #1d628b;
  background-color: transparent;
  border: 1px solid #1d628b;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
