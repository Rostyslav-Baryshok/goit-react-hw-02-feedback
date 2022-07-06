import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 20px;
`;
export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;

  :not(:last-child) {
    margin-bottom: 5px;
  }
  :last-child {
    color: ${({ theme }) => theme.colors.devoted};
  }
`;
