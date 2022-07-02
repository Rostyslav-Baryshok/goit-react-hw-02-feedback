import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <section>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
