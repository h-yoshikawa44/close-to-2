import { VFC } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  calcResult: number;
  abs: number;
  isCorrect: boolean;
};

const AnswerGuide: VFC<Props> = ({ calcResult, abs, isCorrect }) => (
  <Typography align="center">
    {`${calcResult} → 2まで${abs} ${isCorrect ? '〇' : '×'}`}
  </Typography>
);

export default AnswerGuide;
