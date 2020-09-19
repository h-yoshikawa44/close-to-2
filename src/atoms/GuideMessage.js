import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const GuideMessage = ({ AnswerDisplay, lastAnswerCorrect }) => {
  return (
    <Typography>
      {AnswerDisplay && lastAnswerCorrect && '正解！'}
      {AnswerDisplay && !lastAnswerCorrect && '不正解...'}
      {!AnswerDisplay && '一番「2」に近い式はどれかな？'}
    </Typography>
  );
};

GuideMessage.propTypes = {
  AnswerDisplay: PropTypes.bool.isRequired,
  lastAnswerCorrect: PropTypes.bool.isRequired,
};

export default GuideMessage;
