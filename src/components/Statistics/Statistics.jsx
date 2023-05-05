import React from 'react';
import PropTypes from 'prop-types';
import { StatisticList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <li>
        <p>
          Good:<span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span>{total()}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback: <span>{positivePercentage()}%</span>
        </p>
      </li>
    </StatisticList>
  );
};

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
