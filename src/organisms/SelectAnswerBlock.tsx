import { VFC } from 'react';
import { Box } from '@material-ui/core';
import AnswerBlock from '../components/molecules/AnswerBlock';
import { Formula } from '../models/Formula';

type Props = {
  buttonFormulaData: Formula[];
  answerDisplay: boolean;
  correctAnswerIndex: number;
  handleAnswerAction: (index: number) => void;
};

const SelectAnswerBlock: VFC<Props> = ({
  buttonFormulaData,
  answerDisplay,
  correctAnswerIndex,
  handleAnswerAction,
}) => (
  <Box>
    {buttonFormulaData.map((data, index) => (
      <Box p={2} key={data.formula}>
        <AnswerBlock
          index={index}
          calcResult={data.calcResult}
          formula={data.formula}
          abs={data.abs}
          answerDisplay={answerDisplay}
          correctAnswerIndex={correctAnswerIndex}
          handleAnswerAction={handleAnswerAction}
        />
      </Box>
    ))}
  </Box>
);

export default SelectAnswerBlock;
