import { FC } from 'react';
import Box from '@mui/material/Box';
import AnswerBlock from 'components/molecules/AnswerBlock';
import { Formula } from 'models/Formula';

type Props = {
  formulaData: Formula[];
  isAnswerDisplay: boolean;
  handleAnswer: (isCorrect: boolean) => void;
};

const SelectAnswerBlock: FC<Props> = ({
  formulaData,
  isAnswerDisplay,
  handleAnswer,
}) => (
  <Box>
    {formulaData.map((data, index) => (
      <Box p={2} key={data.formula}>
        <AnswerBlock
          index={index}
          calcResult={data.calcResult}
          formula={data.formula}
          abs={data.abs}
          isCorrect={data.isCorrect}
          isAnswerDisplay={isAnswerDisplay}
          handleAnswer={handleAnswer}
        />
      </Box>
    ))}
  </Box>
);

export default SelectAnswerBlock;
