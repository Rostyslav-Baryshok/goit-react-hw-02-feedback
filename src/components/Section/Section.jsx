import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
  padding: 20px;
`;

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
