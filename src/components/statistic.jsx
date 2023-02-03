import styles from '../styles/feedback.module.scss';
import Notification from './notification';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {
        total === 0 ? <Notification message='There is no feedback' /> :
          <div className={styles.statisticContainer}>
            <h2>Statistic</h2>
            <span>{`Good: ${good}`}</span>
            <span>{`Neutral: ${neutral}`}</span>
            <span>{`Bad: ${bad}`}</span>
            <span>{`Total: ${total}`}</span>
            <span>{`PositiveFeedback: ${!positivePercentage ? '0' : positivePercentage}%`}</span>
          </div>
      }
    </>
  );
};

export default Statistic;
