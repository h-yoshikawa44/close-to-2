import { VFC } from 'react';
import Box from '@material-ui/core/Box';
import AnswerButton from 'components/atoms/AnswerButton';
import AnswerGuide from 'components/atoms/AnswerGuide';

type Props = {
  index: number;
  calcResult: number;
  formula: string;
  abs: number;
  isCorrect: boolean;
  answerDisplay: boolean;
  // correctAnswerIndex: number;
  handleAnswerAction: (isCorrect: boolean) => void;
};

const AnswerBlock: VFC<Props> = ({
  index,
  calcResult,
  formula,
  abs,
  isCorrect,
  answerDisplay,
  // correctAnswerIndex,
  handleAnswerAction,
}) => (
  <>
    <AnswerButton
      index={index}
      formula={formula}
      isCorrect={isCorrect}
      onClickAction={handleAnswerAction}
    />
    <Box height={20}>
      {answerDisplay && (
        <AnswerGuide
          index={index}
          calcResult={calcResult}
          abs={abs}
          isCorrect={isCorrect}
          // correctAnswerIndex={correctAnswerIndex}
        />
      )}
    </Box>
  </>
);

export default AnswerBlock;
