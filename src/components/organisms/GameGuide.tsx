import { VFC } from 'react';
import { Box } from '@material-ui/core';
import CountDownTimer from 'components/molecules/CountDownTimer';
import CorrectAnswerCounter from 'components/molecules/CorrectAnswerCounter';
import GuideMessage from 'components/atoms/GuideMessage';

type Props = {
  countDowntime: number;
  correctAnswerCount: number;
  isAnswerDisplay: boolean;
  isLastAnswerCorrect: boolean;
};

const GameGuide: VFC<Props> = ({
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
