import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button
            type="button"
            option={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.elementType.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
