import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.protoTypes = {
  message: PropTypes.string,
};
