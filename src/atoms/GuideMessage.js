import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const GuideMessage = ({ answerDisplay, lastAnswerCorrect }) => (
  <Typography>
    {answerDisplay && lastAnswerCorrect && '正解！'}
    {answerDisplay && !lastAnswerCorrect && '不正解...'}
    {!answerDisplay && '一番「2」に近い式はどれかな？'}
  </Typography>
);

GuideMessage.propTypes = {
  answerDisplay: PropTypes.bool.isRequired,
  lastAnswerCorrect: PropTypes.bool.isRequired,
};

export default GuideMessage;
