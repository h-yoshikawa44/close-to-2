import { FC, useState } from 'react';
import Game from 'components/pages/Game';
import { Diffculty } from 'models/Diffculty';
import { TIMER_LIMIT } from 'constants/game';
import useTimer from 'hooks/useTimer';
import useQuiz from 'hooks/useQuiz';

const EnhancedGame: FC = () => {
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

  const { countDownTime, startTimer, resetTimer } = useTimer(TIMER_LIMIT, () =>
    updateCompleteModalOpen(true),
  );

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
    <>
      {/* Twitterカード */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:url"
        content="https://h-yoshikawa44.github.io/close-to-2/"
      />
      <meta property="og:title" content="Close to 2" />
      <meta property="og:description" content="2に近い式をあてるゲーム部屋" />
      <meta
        property="og:image"
        content="https://h-yoshikawa44.github.io/close-to-2/ogp.png"
      />
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
    </>
  );
};

export default EnhancedGame;
