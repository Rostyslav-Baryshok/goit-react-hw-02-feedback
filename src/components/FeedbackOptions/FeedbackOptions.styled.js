import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  border: ${({ theme }) => theme.borders.none};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: -3px 2px 3px 1px #6aa06a;
  padding: 12px 0;
  width: 65px;
  :not(:last-child) {
    margin-right: 12px;
    transform: scale(1, 1);
    transition: all 0.3s ease;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
    transform: scale(1.1, 1.1);
    box-shadow: 0px 0px 3px 0px black;
  }
`;
