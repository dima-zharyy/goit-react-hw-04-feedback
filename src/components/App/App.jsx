import React, { Component } from 'react';
import { Global } from '@emotion/react';
import {
  Feedback,
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from 'components';
import { GlobalStyles } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + bad + neutral)) * 100);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div>
        <Global styles={GlobalStyles} />
        <Feedback>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                totalFeedback={totalFeedback}
                positiveFeedbackPercentage={positiveFeedbackPercentage}
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
              />
            )}
          </Section>
        </Feedback>
      </div>
    );
  }
}
