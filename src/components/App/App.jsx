import { useState } from 'react';
import {
  Feedback,
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from 'components';
import { GlobalStyles } from './App.styled';
import { Global } from '@emotion/react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + bad + neutral;
  const positiveFeedbackPercentage = Math.round(
    (good / (good + bad + neutral)) * 100
  );

  return (
    <div>
      <Global styles={GlobalStyles} />
      <Feedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          )}
        </Section>
      </Feedback>
    </div>
  );
};
