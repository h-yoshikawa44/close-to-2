import { VFC, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GameGuide from 'components/organisms/GameGuide';
import SelectAnswerBlock from 'components/organisms/SelectAnswerBlock';
import SelectDifficultyModal from 'components/organisms/SelectDifficultyModal';
import CompleteModal from 'components/organisms/CompleteModal';
import { Diffculty, DiffcultyInfo } from 'models/Diffculty';
import { Formula } from 'models/Formula';
import * as Operator from 'constants/operator';
import { TIMER_LIMIT, BUTTON_COUNT, EASY, NORMAL, HARD } from 'constants/game';
import useTimer from 'hooks/useTimer';

const GameTemplate: VFC = () => {
  const { countDownTime, startTimer, stopTimer, resetTimer } =
    useTimer(TIMER_LIMIT);

  const [diffcultyInfo, setDiffcultyInfo] = useState<DiffcultyInfo>(EASY);
  const [buttonFormulaData, setButtonFormulaData] = useState<Formula[]>([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>(-1);
  const [answerCount, updateAnswerCount] = useState<number>(0);
  const [correctAnswerCount, updateCorrectAnswerCount] = useState<number>(0);
  const [difficultyModalOpen, updateDifficultyModalOpen] =
    useState<boolean>(true);
  const [answerDisplay, updateAnswerDisplay] = useState<boolean>(false);
  const [lastAnswerCorrect, updateLastAnswerCorrect] = useState<boolean>(false);
  const [completeModalOpen, updateCompleteModalOpen] = useState<boolean>(false);

  const getRandomInt = (count: number, initNum = 0) =>
    Math.floor(Math.random() * Math.floor(count) + initNum);

  const getPartsOfFormula = () => {
    let operator;
    if (getRandomInt(100, 1) % 2 === 0) {
      operator = Operator.PLUS;
    } else {
      operator = Operator.MINUS;
    }
    const num = getRandomInt(199, -99);
    const parts = {
      operator,
      num,
    };
    return parts;
  };

  const getFormulaData = (addPartsCount: number) => {
    let num = getRandomInt(100);
    let formula = String(num);

    for (let count = 1; count <= addPartsCount; count += 1) {
      const parts = getPartsOfFormula();
      if (parts.operator === Operator.PLUS) {
        num += parts.num;
        formula += parts.num < 0 ? ` + (${parts.num})` : ` + ${parts.num}`;
      } else if (parts.operator === Operator.MINUS) {
        num -= parts.num;
        formula += parts.num < 0 ? ` - (${parts.num})` : ` - ${parts.num}`;
      } else {
        // eslint-disable-next-line no-console
        console.log('error');
      }
    }
    const abs = Math.abs(num - 2);

    const formulaData = {
      calcResult: num,
      formula,
      abs,
    };
    return formulaData;
  };

  // 正答が複数存在しうるかチェック
  const isDuplicationAbs = (formulaDataList: Formula[]) => {
    const absList = formulaDataList.map((data) => data.abs);
    return Array.from(new Set(absList)).length < BUTTON_COUNT;
  };

  const initialCorrectAnswerIndex = (formulaDataList: Formula[]) => {
    const absList = formulaDataList.map((data, index) => ({
      originalIndex: index,
      abs: data.abs,
    }));
    absList.sort((a, b) => {
      if (a.abs < b.abs) {
        return -1;
      }
      return 1;
    });
    setCorrectAnswerIndex(absList[0].originalIndex);
  };

  const initialFormulaData = () => {
    const addPartsCount = diffcultyInfo.FORMULA_PARTS_COUNT - 1;
    let formulaDataList;

    // 正答が複数存在するパターンの場合は、再度初期化しなおし。
    do {
      formulaDataList = [];
      for (let count = 1; count <= BUTTON_COUNT; count += 1) {
        formulaDataList.push(getFormulaData(addPartsCount));
      }
    } while (isDuplicationAbs(formulaDataList));
    initialCorrectAnswerIndex(formulaDataList);
    setButtonFormulaData(formulaDataList);
  };

  const initialDiffcultySetting = (selectDiffculty: Diffculty) => {
    switch (selectDiffculty) {
      case 'easy':
        setDiffcultyInfo(EASY);
        break;
      case 'normal':
        setDiffcultyInfo(NORMAL);
        break;
      case 'hard':
        setDiffcultyInfo(HARD);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('error');
    }
  };

  const checkAnswer = (index: number) => {
    if (index === correctAnswerIndex) {
      updateCorrectAnswerCount((count) => count + 1);
      updateLastAnswerCorrect(true);
    } else {
      updateLastAnswerCorrect(false);
    }
  };

  useEffect(() => {
    initialFormulaData();
    // TODO: react-hooks/exhaustive-depsルールを一時的に無効化
    // eslint-disable-next-line
  }, [diffcultyInfo, answerCount]);

  useEffect(() => {
    if (countDownTime === 0) {
      stopTimer();
      updateCompleteModalOpen(true);
    }
    // TODO: react-hooks/exhaustive-depsルールを一時的に無効化
    // eslint-disable-next-line
  }, [countDownTime]);

  const handleSelectDifficultyAction = (selectDiffculty: Diffculty) => {
    initialDiffcultySetting(selectDiffculty);
    updateDifficultyModalOpen(false);
    startTimer();
  };

  const handleAnswerAction = (index: number) => {
    checkAnswer(index);
    updateAnswerDisplay(true);
    setTimeout(() => {
      updateAnswerDisplay(false);
      updateAnswerCount((count) => count + 1);
    }, 1200);
  };

  const handleRestartAction = () => {
    updateCompleteModalOpen(false);
    resetTimer();
    updateCorrectAnswerCount(0);
    updateDifficultyModalOpen(true);
  };

  return (
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
            answerDisplay={answerDisplay}
            lastAnswerCorrect={lastAnswerCorrect}
          />
          <SelectAnswerBlock
            buttonFormulaData={buttonFormulaData}
            answerDisplay={answerDisplay}
            correctAnswerIndex={correctAnswerIndex}
            handleAnswerAction={handleAnswerAction}
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
};

export default GameTemplate;
