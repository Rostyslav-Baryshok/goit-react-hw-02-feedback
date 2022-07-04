import PropTypes from 'prop-types';
import { Container } from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
