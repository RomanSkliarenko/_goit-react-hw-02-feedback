import React, { useState } from 'react';
import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistic from './statistic';
import styles from '../styles/feedback.module.scss';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateStatistic = (e) => {
    if (e.target.name === 'good') {
      setGood(good + 1);
    }
    if (e.target.name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e.target.name === 'bad') {
      setBad(bad + 1);
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    return Math.round((good / totalFeedback()) * 100);
  };

  return (
    <div className={styles.feedbackContainer}>
      <Section title='Please leave feedback'>
        <FeedbackOptions updateStatistic={updateStatistic} options={['good', 'neutral', 'bad']} />
      </Section>
      <Section title='Statistic'>
        <Statistic good={good} bad={bad} neutral={neutral} total={totalFeedback()}
                   positivePercentage={positiveFeedback()} />
      </Section>
    </div>
  );
};

export default App;
