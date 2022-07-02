import PropTypes from 'prop-types';
import { Wrapper } from 'components/Section/Section.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <div>
        <span>Good: {good}</span>
        <p></p>
        <span>Neutral: {neutral}</span>
        <p></p>
        <span>Bad: {bad}</span>
        <p></p>
        <span>Total: {total}</span>
        <p></p>
        <span>Positive Feedback: {positivePercentage} %</span>
        <p></p>
      </div>
    </Wrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
