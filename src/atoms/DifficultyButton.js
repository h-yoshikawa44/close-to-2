import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const DifficultyButton = ({ difficulty, onClickAction }) => {
  return (
    <>
      {difficulty === '初級' && (
        <Button
          variant="contained"
          style={{ color: 'white', backgroundColor: green[600] }}
          onClick={() => onClickAction(difficulty)}
        >
          {`初級（数値${process.env.REACT_APP_EASY_FORMULA_PARTS_COUNT}つ）`}
        </Button>
      )}
      {(difficulty === '中級' || difficulty === '上級') && (
        <Button
          variant="contained"
          color={difficulty === '中級' ? 'primary' : 'secondary'}
          onClick={() => onClickAction(difficulty)}
        >
          {difficulty === '中級'
            ? `中級（数値${process.env.REACT_APP_NORMAL_FORMULA_PARTS_COUNT}つ）`
            : `上級（数値${process.env.REACT_APP_HARD_FORMULA_PARTS_COUNT}つ）`}
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
