import PropTypes from 'prop-types';

import { Wrapper, Title, Container } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
