import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import AnswerBlock from '../molecules/AnswerBlock';

const SelectAnswerBlock = ({
  buttonFormulaData,
  answerDisplay,
  correctAnswerIndex,
  handleAnswerAction,
}) => {
  return buttonFormulaData.map((data, index) => {
    return (
      <Box p={2} key={data.formula}>
        <AnswerBlock
          index={index}
          calcResult={data.calcResult}
          formula={data.formula}
          abs={data.abs}
          answerDisplay={answerDisplay}
          correctAnswerIndex={correctAnswerIndex}
          handleAnswerAction={handleAnswerAction}
        />
      </Box>
    );
  });
};

SelectAnswerBlock.propTypes = {
  buttonFormulaData: PropTypes.arrayOf(
    PropTypes.exact({
      calcResult: PropTypes.number.isRequired,
      formula: PropTypes.string.isRequired,
      abs: PropTypes.number.isRequired,
    })
  ),
  answerDisplay: PropTypes.bool.isRequired,
  correctAnswerIndex: PropTypes.number.isRequired,
  handleAnswerAction: PropTypes.func.isRequired,
};

export default SelectAnswerBlock;
