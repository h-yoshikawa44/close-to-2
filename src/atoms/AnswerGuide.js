import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const AnswerGuide = ({ index, calcResult, abs, correctAnswerIndex }) => {
  return (
    <Typography align="center">
      {`${calcResult} → 2まで${abs} ${
        index === correctAnswerIndex ? '〇' : '×'
      }`}
    </Typography>
  );
};

AnswerGuide.propTypes = {
  index: PropTypes.number.isRequired,
  calcResult: PropTypes.number.isRequired,
  abs: PropTypes.number.isRequired,
  correctAnswerIndex: PropTypes.number.isRequired,
};

export default AnswerGuide;
