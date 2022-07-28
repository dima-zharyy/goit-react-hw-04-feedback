import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer } from './Feedback.styled';

export default function Feedback({ children }) {
  return <FeedbackContainer>{children}</FeedbackContainer>;
}

Feedback.propTypes = {
  children: PropTypes.node,
};
