import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Contact = styled.p`
  margin-right: 10px;
  font-size: 22px;
  font-weight: bold;
`;

export const BtnClose = styled.button`
  padding-bottom: 5px;
  font-size: 16px;
  width: 32px;
  background-color: inherit;
  border: 1px solid #1d628b;
  border-radius: 50%;
  color: #1d628b;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  }
`;
