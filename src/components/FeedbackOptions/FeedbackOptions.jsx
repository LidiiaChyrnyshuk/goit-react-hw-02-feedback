import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(item => (
        <li key={item}>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
