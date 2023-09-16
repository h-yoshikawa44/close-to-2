import { VFC } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GameGuide from 'components/organisms/GameGuide';
import SelectAnswerBlock from 'components/organisms/SelectAnswerBlock';
import SelectDifficultyModal from 'components/organisms/SelectDifficultyModal';
import CompleteModal from 'components/organisms/CompleteModal';
import { Formula } from 'models/Formula';
import { Diffculty, DiffcultyInfo } from 'models/Diffculty';

type Props = {
  countDownTime: number;
  diffcultyInfo: DiffcultyInfo;
  formulaData: Formula[];
  correctAnswerCount: number;
  isAnswerDisplay: boolean;
  isLastAnswerCorrect: boolean;
  difficultyModalOpen: boolean;
  completeModalOpen: boolean;
  handleAnswer: (isCorrect: boolean) => void;
  handleSelectDifficulty: (diffculty: Diffculty) => void;
  handleRestart: VoidFunction;
};

const Game: VFC<Props> = ({
  countDownTime,
  diffcultyInfo,
  formulaData,
  correctAnswerCount,
  isAnswerDisplay,
  isLastAnswerCorrect,
  difficultyModalOpen,
  completeModalOpen,
  handleAnswer,
  handleSelectDifficulty,
  handleRestart,
}) => (
  <>
    <Container maxWidth="sm">
      <Box
        p={4}
        my={1}
        boxShadow={3}
        borderRadius={16}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <GameGuide
          countDowntime={countDownTime}
          correctAnswerCount={correctAnswerCount}
          isAnswerDisplay={isAnswerDisplay}
          isLastAnswerCorrect={isLastAnswerCorrect}
        />
        <SelectAnswerBlock
          formulaData={formulaData}
          isAnswerDisplay={isAnswerDisplay}
          handleAnswer={handleAnswer}
        />
      </Box>
    </Container>
    <SelectDifficultyModal
      open={difficultyModalOpen}
      handleSelectDifficulty={handleSelectDifficulty}
    />
    <CompleteModal
      open={completeModalOpen}
      diffculty={diffcultyInfo.JP_WORD}
      correctAnswerCount={correctAnswerCount}
      handleRestart={handleRestart}
    />
  </>
);

export default Game;
