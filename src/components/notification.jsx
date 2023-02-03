import styles from '../styles/feedback.module.scss';

const Notification = ({ message }) => {
  return (
    <div className={styles.message}>
      <h2>{message}</h2>
    </div>
  );
};

export default Notification;
