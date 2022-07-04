import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <>{children}</>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.shape),
};
