import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import SelectDifficultyModal from './organisms/SelectDifficultyModal';
import './App.css';

const App = () => {
  const PLUS_OPERATOR = 'PLUS';
  const MINUS_OPERATOR = 'MINUS';
  const DIFFCULTY_EASY = 'EASY';
  const DIFFCULTY_NORMAL = 'NORMAL';
  const DIFFCULTY_HARD = 'HARD';

  const buttonCount = 4;
  const answerButtonColor = [orange[800], red[500], green[600], indigo[500]];

  const [partsCount, setPartsCount] = useState(1);
  const [buttonFormulaData, setButtonFormulaData] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [answerCount, updateAnswerCount] = useState(0);
  const [correctAnswerCount, updateCorrectAnswerCount] = useState(0);
  const [difficultyModalOpen, updateDifficultyModalOpen] = useState(true);

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
    console.log(parts);
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

    const formulaData = {
      num,
      formula,
    };
    return formulaData;
  };

  const initialCorrectAnswerIndex = (formulaDataList) => {
    const absList = [];
    formulaDataList.forEach((data, index) => {
      absList.push({
        originalIndex: index,
        abs: Math.abs(data.num - 2),
      });
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

    const formulaDataList = [];
    for (let count = 1; count <= buttonCount; count += 1) {
      formulaDataList.push(getFormulaData(addPartsCount));
    }
    initialCorrectAnswerIndex(formulaDataList);
    setButtonFormulaData(formulaDataList);
  };

  const initialPartsCount = (diffculty) => {
    switch (diffculty) {
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
    }
  };

  useEffect(() => {
    initialFormulaData();
  }, [partsCount, answerCount]);

  const handleSelectDifficultyAction = (diffculty) => {
    initialPartsCount(diffculty);
    updateDifficultyModalOpen(false);
  };

  const handleAnswerAction = (index) => {
    checkAnswer(index);
    updateAnswerCount((count) => count + 1);
  };

  return (
    <>
      <Container maxWidth="sm">
        {buttonFormulaData.map((data, index) => {
          return (
            <Button
              key={data.formula}
              variant="contained"
              style={{
                color: 'white',
                backgroundColor: answerButtonColor[index],
              }}
              onClick={() => handleAnswerAction(index)}
            >
              {data.formula}
            </Button>
          );
        })}
        <p>
          正解数：
          {correctAnswerCount}
        </p>
      </Container>
      <SelectDifficultyModal
        open={difficultyModalOpen}
        handleSelectDifficultyAction={handleSelectDifficultyAction}
      />
    </>
  );
};

export default App;
