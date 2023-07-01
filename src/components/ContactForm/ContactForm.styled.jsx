import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid ${props => props.theme.colors.black};
  padding: 10px 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  gap: 5px;
`;

export const Input = styled.input`
  max-width: 25ch;
`;
