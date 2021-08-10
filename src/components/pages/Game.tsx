import { VFC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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
  handleSelectDifficultyAction: (diffculty: Diffculty) => void;
  handleRestartAction: VoidFunction;
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
  handleSelectDifficultyAction,
  handleRestartAction,
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
          answerDisplay={isAnswerDisplay}
          lastAnswerCorrect={isLastAnswerCorrect}
        />
        <SelectAnswerBlock
          buttonFormulaData={formulaData}
          answerDisplay={isAnswerDisplay}
          // correctAnswerIndex={isCorrectAnswerIndex}
          handleAnswerAction={handleAnswer}
        />
      </Box>
    </Container>
    <SelectDifficultyModal
      open={difficultyModalOpen}
      handleSelectDifficultyAction={handleSelectDifficultyAction}
    />
    <CompleteModal
      open={completeModalOpen}
      diffculty={diffcultyInfo.JP_WORD}
      correctAnswerCount={correctAnswerCount}
      handleRestartAction={handleRestartAction}
    />
  </>
);

export default Game;
