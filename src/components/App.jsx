import React from 'react';
import Statistic from './statistic';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import styles from '../styles/feedback.module.scss';


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateStatistic = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positiveFeedback() {
    const { good } = this.state;
    return Math.round((good / this.totalFeedback()) * 100);
  }

  render() {
    return (
      <div className={styles.feedbackContainer}>
        <Section title='Please leave feedback'>
          <FeedbackOptions updateStatistic={this.updateStatistic} options={Object.keys(this.state)}/>
        </Section>
        <Section title='Statistic'>
          <Statistic {...this.state} total={this.totalFeedback()}
                     positivePercentage={this.positiveFeedback()} />
        </Section>
      </div>
    );
  }
}

export default App;
