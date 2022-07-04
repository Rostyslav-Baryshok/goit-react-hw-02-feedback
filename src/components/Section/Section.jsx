import PropTypes from 'prop-types';
import { StyleSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyleSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyleSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
