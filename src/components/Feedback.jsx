import React from 'react';
import styles from '../styles/feedback.module.scss';


class Feedback extends React.Component {
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
        <h2>Please leave feedback</h2>
        <button name='good' onClick={this.updateStatistic}>good</button>
        <button name='neutral' onClick={this.updateStatistic}>neutral</button>
        <button name='bad' onClick={this.updateStatistic}>bad</button>
        {this.totalFeedback() === 0 ? <Notification message='There is no feedback' /> :
          <Statistic {...this.state} total={this.totalFeedback()}
                     positivePercentage={this.positiveFeedback()} />}
      </div>
    );
  }
}

export default Feedback;


class Notification extends React.Component {
  render() {
    return (
      <div className={styles.message}>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}


class Statistic extends React.Component {
  render() {
    return (
      <div className={styles.statisticContainer}>
        <h2>Statistic</h2>
        <span>{`Good: ${this.props.good}`}</span>
        <span>{`Neutral: ${this.props.neutral}`}</span>
        <span>{`Bad: ${this.props.bad}`}</span>
        <span>{`Total: ${this.props.total}`}</span>
        <span>{`PositiveFeedback: ${this.props.positivePercentage}%`}</span>
      </div>
    );
  }
}


