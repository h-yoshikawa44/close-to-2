import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import CountDownTimer from '../molecules/CountDownTimer';
import CorrectAnswerCounter from '../molecules/CorrectAnswerCounter';
import GuideMessage from '../atoms/GuideMessage';

const GameGuide = ({
  countDowntime,
  correctAnswerCount,
  answerDisplay,
  lastAnswerCorrect,
}) => {
  return (
    <>
      <Box display="flex">
        <CountDownTimer countDowntime={countDowntime} />
        <CorrectAnswerCounter correctAnswerCount={correctAnswerCount} />
      </Box>
      <GuideMessage
        answerDisplay={answerDisplay}
        lastAnswerCorrect={lastAnswerCorrect}
      />
    </>
  );
};

GameGuide.propTypes = {
  countDowntime: PropTypes.number.isRequired,
  correctAnswerCount: PropTypes.number.isRequired,
  answerDisplay: PropTypes.bool.isRequired,
  lastAnswerCorrect: PropTypes.bool.isRequired,
};

export default GameGuide;
