import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer } from './Feedback.styled';

export const Feedback = ({ children }) => {
  return <FeedbackContainer>{children}</FeedbackContainer>;
};

Feedback.propTypes = {
  children: PropTypes.node,
};
