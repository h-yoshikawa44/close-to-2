import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import * as Diffculty from '../constants/diffculty';
import { EASY, NORMAL, HARD } from '../constants/game';

const DifficultyButton = ({ difficulty, onClickAction }) => (
  <>
    {difficulty === Diffculty.EASY && (
      <Button
        variant="contained"
        style={{ color: 'white', backgroundColor: green[600] }}
        onClick={() => onClickAction(difficulty)}
      >
        {`${Diffculty.EASY}（数値${EASY.FORMULA_PARTS_COUNT}つ）`}
      </Button>
    )}
    {(difficulty === Diffculty.NORMAL || difficulty === Diffculty.HARD) && (
      <Button
        variant="contained"
        color={difficulty === Diffculty.NORMAL ? 'primary' : 'secondary'}
        onClick={() => onClickAction(difficulty)}
      >
        {difficulty === Diffculty.NORMAL
          ? `${Diffculty.NORMAL}（数値${NORMAL.FORMULA_PARTS_COUNT}つ）`
          : `${Diffculty.HARD}（数値${HARD.FORMULA_PARTS_COUNT}つ）`}
      </Button>
    )}
  </>
);

DifficultyButton.propTypes = {
  difficulty: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};

export default DifficultyButton;
