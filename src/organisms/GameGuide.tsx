import { VFC } from 'react';
import { Box } from '@material-ui/core';
import CountDownTimer from '../molecules/CountDownTimer';
import CorrectAnswerCounter from '../molecules/CorrectAnswerCounter';
import GuideMessage from '../atoms/GuideMessage';

type Props = {
  countDowntime: number;
  correctAnswerCount: number;
  answerDisplay: boolean;
  lastAnswerCorrect: boolean;
};

const GameGuide: VFC<Props> = ({
  countDowntime,
  correctAnswerCount,
  answerDisplay,
  lastAnswerCorrect,
}) => (
  <>
    <Box display="flex">
      <CountDownTimer countDowntime={countDowntime} />
      <CorrectAnswerCounter correctAnswerCount={correctAnswerCount} />
    </Box>
    <GuideMessage
      answerDisplay={answerDisplay}
      lastAnswerCorrect={lastAnswerCorrect}
    />
  </>
);

export default GameGuide;
