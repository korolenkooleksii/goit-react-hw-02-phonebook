import styled from '@emotion/styled';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
`;

export const ItemContacts = styled.li`
  font-size: 20px;
  color: ${p => p.theme.colors.dark};
`;
