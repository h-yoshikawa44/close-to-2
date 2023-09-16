import { FC } from 'react';
import Box from '@mui/material/Box';
import CountDownTimer from 'components/molecules/CountDownTimer';
import CorrectAnswerCounter from 'components/molecules/CorrectAnswerCounter';
import GuideMessage from 'components/atoms/GuideMessage';

type Props = {
  countDowntime: number;
  correctAnswerCount: number;
  isAnswerDisplay: boolean;
  isLastAnswerCorrect: boolean;
};

const GameGuide: FC<Props> = ({
  countDowntime,
  correctAnswerCount,
  isAnswerDisplay,
  isLastAnswerCorrect,
}) => (
  <>
    <Box display="flex">
      <CountDownTimer countDowntime={countDowntime} />
      <CorrectAnswerCounter correctAnswerCount={correctAnswerCount} />
    </Box>
    <GuideMessage
      isAnswerDisplay={isAnswerDisplay}
      isLastAnswerCorrect={isLastAnswerCorrect}
    />
  </>
);

export default GameGuide;
