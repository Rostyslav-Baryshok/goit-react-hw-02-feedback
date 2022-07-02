import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  width: 60px;
  margin-top: 20px;
  :not(:last-child) {
    margin-right: 12px;
  }
  :hover {
    background-color: var(--secondary);
    box-shadow: inset 0 0 0 1px gray;
    transition: all 0.3s ease;
  }
`;
