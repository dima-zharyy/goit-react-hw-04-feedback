import React from 'react';
import { List, Item, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  totalFeedback,
  positiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <List>
      <Item>
        <Text>Good:</Text>
        <Text>{good}</Text>
      </Item>
      <Item>
        <Text>Neutral:</Text>
        <Text>{neutral}</Text>
      </Item>
      <Item>
        <Text>Bad:</Text>
        <Text>{bad}</Text>
      </Item>
      <Item>
        <Text>Total:</Text>
        <Text>{totalFeedback}</Text>
      </Item>
      <Item>
        <Text>Positive feedback:</Text>
        <Text>{positiveFeedbackPercentage}%</Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
