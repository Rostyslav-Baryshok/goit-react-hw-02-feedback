import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
  padding-top: 30px;
`;

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
