import { VFC } from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  index: number;
  calcResult: number;
  abs: number;
  isCorrect: boolean;
  // correctAnswerIndex: number;
};

const AnswerGuide: VFC<Props> = ({
  index,
  calcResult,
  abs,
  isCorrect,
  // correctAnswerIndex,
}) => (
  <Typography align="center">
    {`${calcResult} → 2まで${abs} ${isCorrect ? '〇' : '×'}`}
  </Typography>
);

export default AnswerGuide;
