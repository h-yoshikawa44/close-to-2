import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import { DiffcultyInfo } from '../models/Diffculty';

export const BUTTON_COUNT = 4;
export const BUTTON_WIDTH = 250;

export const BUTTON_COLORS = [orange[800], red[500], green[600], indigo[500]];

export const EASY: DiffcultyInfo = {
  EN_WORD: 'easy',
  JP_WORD: '初級',
  FORMULA_PARTS_COUNT: 2,
};

export const NORMAL: DiffcultyInfo = {
  EN_WORD: 'normal',
  JP_WORD: '中級',
  FORMULA_PARTS_COUNT: 3,
};

export const HARD: DiffcultyInfo = {
  EN_WORD: 'hard',
  JP_WORD: '上級',
  FORMULA_PARTS_COUNT: 5,
};
