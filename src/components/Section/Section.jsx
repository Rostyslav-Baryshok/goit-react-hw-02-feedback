import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
