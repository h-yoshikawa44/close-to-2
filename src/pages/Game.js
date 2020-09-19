import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GameGuide from '../organisms/GameGuide';
import SelectAnswerBlock from '../organisms/SelectAnswerBlock';
import SelectDifficultyModal from '../organisms/SelectDifficultyModal';
import CompleteModal from '../organisms/CompleteModal';

const GameTemplate = () => {
  const PLUS_OPERATOR = 'PLUS';
  const MINUS_OPERATOR = 'MINUS';
  const DIFFCULTY_EASY = '初級';
  const DIFFCULTY_NORMAL = '中級';
  const DIFFCULTY_HARD = '上級';

  const [countDowntime, updateCountDownTime] = useState(30);
  const [timerId, setTimerId] = useState(0);
  const [diffculty, setDiffculty] = useState(DIFFCULTY_EASY);
  const [partsCount, setPartsCount] = useState(1);
  const [buttonFormulaData, setButtonFormulaData] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [answerCount, updateAnswerCount] = useState(0);
  const [correctAnswerCount, updateCorrectAnswerCount] = useState(0);
  const [difficultyModalOpen, updateDifficultyModalOpen] = useState(true);
  const [answerDisplay, updateAnswerDisplay] = useState(false);
  const [lastAnswerCorrect, updateLastAnswerCorrect] = useState(false);
  const [completeModalOpen, updateCompleteModalOpen] = useState(false);

  const startTimer = () => {
    setTimerId(
      setInterval(() => {
        updateCountDownTime((time) => time - 1);
      }, 1000)
    );
  };
  const stopTimer = () => {
    clearInterval(timerId);
  };

  const getRandomInt = (count, initNum = 0) => {
    return Math.floor(Math.random() * Math.floor(count) + initNum);
  };

  const getPartsOfFormula = () => {
    let operator;
    if (getRandomInt(100, 1) % 2 === 0) {
      operator = PLUS_OPERATOR;
    } else {
      operator = MINUS_OPERATOR;
    }
    const num = getRandomInt(199, -99);
    const parts = {
      operator,
      num,
    };
    return parts;
  };

  const getFormulaData = (addPartsCount) => {
    let num = getRandomInt(100);
    let formula = String(num);

    for (let count = 1; count <= addPartsCount; count += 1) {
      const parts = getPartsOfFormula();
      if (parts.operator === PLUS_OPERATOR) {
        num += parts.num;
        formula += parts.num < 0 ? ` + (${parts.num})` : ` + ${parts.num}`;
      } else if (parts.operator === MINUS_OPERATOR) {
        num -= parts.num;
        formula += parts.num < 0 ? ` - (${parts.num})` : ` - ${parts.num}`;
      } else {
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
  const isDuplicationAbs = (formulaDataList) => {
    const absList = formulaDataList.map((data) => {
      return data.abs;
    });
    return (
      Array.from(new Set(absList)).length < process.env.REACT_APP_BUTTON_COUNT
    );
  };

  const initialCorrectAnswerIndex = (formulaDataList) => {
    const absList = formulaDataList.map((data, index) => {
      return {
        originalIndex: index,
        abs: data.abs,
      };
    });
    absList.sort((a, b) => {
      if (a.abs < b.abs) {
        return -1;
      }
      return 1;
    });
    setCorrectAnswerIndex(absList[0].originalIndex);
  };

  const initialFormulaData = () => {
    const addPartsCount = partsCount - 1;
    let formulaDataList;

    // 正答が複数存在するパターンの場合は、再度初期化しなおし。
    do {
      formulaDataList = [];
      for (
        let count = 1;
        count <= process.env.REACT_APP_BUTTON_COUNT;
        count += 1
      ) {
        formulaDataList.push(getFormulaData(addPartsCount));
      }
    } while (isDuplicationAbs(formulaDataList));
    initialCorrectAnswerIndex(formulaDataList);
    setButtonFormulaData(formulaDataList);
  };

  const initialDiffcultySetting = (selectDiffculty) => {
    setDiffculty(selectDiffculty);
    switch (selectDiffculty) {
      case DIFFCULTY_EASY:
        setPartsCount(process.env.REACT_APP_EASY_FORMULA_PARTS_COUNT);
        break;
      case DIFFCULTY_NORMAL:
        setPartsCount(process.env.REACT_APP_NORMAL_FORMULA_PARTS_COUNT);
        break;
      case DIFFCULTY_HARD:
        setPartsCount(process.env.REACT_APP_HARD_FORMULA_PARTS_COUNT);
        break;
      default:
        console.log('error');
    }
  };

  const checkAnswer = (index) => {
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
  }, [partsCount, answerCount]);

  useEffect(() => {
    if (countDowntime === 0) {
      stopTimer();
      updateCompleteModalOpen(true);
    }
    // TODO: react-hooks/exhaustive-depsルールを一時的に無効化
    // eslint-disable-next-line
  }, [countDowntime]);

  const handleSelectDifficultyAction = (selectDiffculty) => {
    initialDiffcultySetting(selectDiffculty);
    updateDifficultyModalOpen(false);
    startTimer();
  };

  const handleAnswerAction = (index) => {
    checkAnswer(index);
    updateAnswerDisplay(true);
    setTimeout(() => {
      updateAnswerDisplay(false);
      updateAnswerCount((count) => count + 1);
    }, 1200);
  };

  const handleRestartAction = () => {
    updateCompleteModalOpen(false);
    updateCountDownTime(30);
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
            countDowntime={countDowntime}
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
        diffculty={diffculty}
        correctAnswerCount={correctAnswerCount}
        handleRestartAction={handleRestartAction}
      />
    </>
  );
};

export default GameTemplate;
