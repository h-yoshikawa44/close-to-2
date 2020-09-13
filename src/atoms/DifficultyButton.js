import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const DifficultyButton = ({ difficulty, onClickAction }) => {
  return (
    <>
      {difficulty === 'EASY' && (
        <Button
          variant="contained"
          style={{ color: 'white', backgroundColor: green[600] }}
          onClick={() => onClickAction(difficulty)}
        >
          初級（数値2つ）
        </Button>
      )}
      {(difficulty === 'NORMAL' || difficulty === 'HARD') && (
        <Button
          variant="contained"
          color={difficulty === 'NORMAL' ? 'primary' : 'secondary'}
          onClick={() => onClickAction(difficulty)}
        >
          {difficulty === 'NORMAL' ? '中級（数値3つ）' : '上級（数値5つ）'}
        </Button>
      )}
    </>
  );
};

DifficultyButton.propTypes = {
  difficulty: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};

export default DifficultyButton;
