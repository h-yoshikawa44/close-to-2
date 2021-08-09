import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import { BUTTON_WIDTH } from '../constants/game';

const AnswerButton = ({ index, formula, onClickAction }) => {
  const answerButtonColor = [orange[800], red[500], green[600], indigo[500]];
  return (
    <Button
      variant="contained"
      style={{
        width: `${BUTTON_WIDTH}px`,
        color: 'white',
        backgroundColor: answerButtonColor[index],
      }}
      onClick={() => onClickAction(index)}
    >
      {formula}
    </Button>
  );
};

AnswerButton.propTypes = {
  index: PropTypes.number.isRequired,
  formula: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};

export default AnswerButton;
