import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Title>
      <h2>{message}</h2>
    </Title>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
