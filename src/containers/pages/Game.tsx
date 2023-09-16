import { FC, useState, useEffect } from 'react';
import Game from 'components/pages/Game';
import { Diffculty } from 'models/Diffculty';
import { TIMER_LIMIT } from 'constants/game';
import useTimer from 'hooks/useTimer';
import useQuiz from 'hooks/useQuiz';

const EnhancedGame: FC = () => {
  const { countDownTime, startTimer, stopTimer, resetTimer } =
    useTimer(TIMER_LIMIT);

  const {
    diffcultyInfo,
    formulaData,
    correctAnswerCount,
    isAnswerDisplay,
    isLastAnswerCorrect,
    selectDiffculty,
    resetAnswerCount,
    handleAnswer,
  } = useQuiz();

  const [difficultyModalOpen, updateDifficultyModalOpen] =
    useState<boolean>(true);
  const [completeModalOpen, updateCompleteModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (countDownTime === 0) {
      stopTimer();
      updateCompleteModalOpen(true);
    }
  }, [countDownTime, stopTimer]);

  const handleSelectDifficulty = (diffculty: Diffculty) => {
    selectDiffculty(diffculty);
    updateDifficultyModalOpen(false);
    startTimer();
  };

  const handleRestart = () => {
    updateCompleteModalOpen(false);
    resetTimer();
    resetAnswerCount();
    updateDifficultyModalOpen(true);
  };

  return (
    <Game
      countDownTime={countDownTime}
      diffcultyInfo={diffcultyInfo}
      formulaData={formulaData}
      correctAnswerCount={correctAnswerCount}
      isAnswerDisplay={isAnswerDisplay}
      isLastAnswerCorrect={isLastAnswerCorrect}
      difficultyModalOpen={difficultyModalOpen}
      completeModalOpen={completeModalOpen}
      handleAnswer={handleAnswer}
      handleSelectDifficulty={handleSelectDifficulty}
      handleRestart={handleRestart}
    />
  );
};

export default EnhancedGame;
