import { FC } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  isAnswerDisplay: boolean;
  isLastAnswerCorrect: boolean;
};

const GuideMessage: FC<Props> = ({ isAnswerDisplay, isLastAnswerCorrect }) => (
  <Typography>
    {isAnswerDisplay && isLastAnswerCorrect && '正解！'}
    {isAnswerDisplay && !isLastAnswerCorrect && '不正解...'}
    {!isAnswerDisplay && '一番「2」に近い式はどれかな？'}
  </Typography>
);

export default GuideMessage;
