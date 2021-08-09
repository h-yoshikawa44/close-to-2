import { VFC } from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  index: number;
  calcResult: number;
  abs: number;
  correctAnswerIndex: number;
};

const AnswerGuide: VFC<Props> = ({
  index,
  calcResult,
  abs,
  correctAnswerIndex,
}) => (
  <Typography align="center">
    {`${calcResult} → 2まで${abs} ${index === correctAnswerIndex ? '〇' : '×'}`}
  </Typography>
);

export default AnswerGuide;
