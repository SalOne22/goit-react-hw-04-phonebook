import styled from 'styled-components';

import theme from 'theme';

export const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 16px;
`;

export const Container = styled.div`
  padding: 0 32px;
`;

Title.defaultProps = {
  theme,
};
