import styled from 'styled-components';

export const List = styled.ul`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 15px;

  & + & {
    margin-top: 10px;
  }
`;
