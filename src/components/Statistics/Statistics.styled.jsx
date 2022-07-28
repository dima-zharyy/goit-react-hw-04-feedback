import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 5px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Text = styled.p`
  width: 50%;
`;
