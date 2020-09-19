import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import AnswerButton from '../atoms/AnswerButton';
import AnswerGuide from '../atoms/AnswerGuide';

const AnswerBlock = ({
  index,
  calcResult,
  formula,
  abs,
  answerDisplay,
  correctAnswerIndex,
  handleAnswerAction,
}) => {
  return (
    <>
      <AnswerButton
        index={index}
        formula={formula}
        onClickAction={handleAnswerAction}
      />
      <Box height={20}>
        {answerDisplay && (
          <AnswerGuide
            index={index}
            calcResult={calcResult}
            abs={abs}
            correctAnswerIndex={correctAnswerIndex}
          />
        )}
      </Box>
    </>
  );
};

AnswerBlock.propTypes = {
  index: PropTypes.number.isRequired,
  calcResult: PropTypes.number.isRequired,
  formula: PropTypes.string.isRequired,
  abs: PropTypes.number.isRequired,
  answerDisplay: PropTypes.bool.isRequired,
  correctAnswerIndex: PropTypes.number.isRequired,
  handleAnswerAction: PropTypes.func.isRequired,
};

export default AnswerBlock;
