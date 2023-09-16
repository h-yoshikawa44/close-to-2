import { VFC } from 'react';
import Box from '@mui/material/Box';
import AnswerButton from 'components/atoms/AnswerButton';
import AnswerGuide from 'components/atoms/AnswerGuide';

type Props = {
  index: number;
  calcResult: number;
  formula: string;
  abs: number;
  isCorrect: boolean;
  isAnswerDisplay: boolean;
  handleAnswer: (isCorrect: boolean) => void;
};

const AnswerBlock: VFC<Props> = ({
  index,
  calcResult,
  formula,
  abs,
  isCorrect,
  isAnswerDisplay,
  handleAnswer,
}) => (
  <>
    <AnswerButton
      index={index}
      formula={formula}
      isCorrect={isCorrect}
      onClickAction={handleAnswer}
    />
    <Box height={20}>
      {isAnswerDisplay && (
        <AnswerGuide calcResult={calcResult} abs={abs} isCorrect={isCorrect} />
      )}
    </Box>
  </>
);

export default AnswerBlock;
