import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px #bebebe;
  padding: 12px 0;
  width: 65px;
  margin-top: 30px;
  :not(:last-child) {
    margin-right: 12px;
    transform: scale(1, 1);
    transition: all 0.3s ease;
  }
  :hover {
    background-color: #00e01d;
    color: #fff;
    transition: all 0.3s ease;
    transform: scale(1.1, 1.1);
    box-shadow: 0px 0px 3px 0px black;
  }
`;
