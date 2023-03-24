import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const TitleContacts = styled.h2`
  color: ${p => p.theme.colors.greey};
  margin-bottom: 20px;
`;

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemContacts = styled.li`
  font-size: 20px;
  color: ${p => p.theme.colors.dark};
`;