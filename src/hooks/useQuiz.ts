import { useState, useCallback, useEffect } from 'react';
import { Diffculty, DiffcultyInfo } from 'models/Diffculty';
import { Operator, Formula } from 'models/Formula';
import { BUTTON_COUNT, EASY, NORMAL, HARD } from 'constants/game';

const useQuiz = (): {
  diffcultyInfo: DiffcultyInfo;
  formulaData: Formula[];
  correctAnswerCount: number;
  isAnswerDisplay: boolean;
  isLastAnswerCorrect: boolean;
  selectDiffculty: (diffculty: Diffculty) => void;
  resetAnswerCount: VoidFunction;
  handleAnswer: (isCorrect: boolean) => void;
} => {
  const [diffcultyInfo, setDiffcultyInfo] = useState<DiffcultyInfo>(EASY);
  const [formulaData, setFormulaData] = useState<Formula[]>([]);
  const [answerCount, setAnswerCount] = useState<number>(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState<boolean>(false);
  const [isLastAnswerCorrect, setIsLastAnswerCorrect] =
    useState<boolean>(false);

  const getRandomInt = useCallback(
    (min: number, max: number) =>
      Math.floor(Math.random() * Math.floor(max + 1 - min) + min),
    [],
  );

  // 式のバーツ1つ分のデータ作成 & 取得
  const createPartsOfFormula = useCallback(
    () => ({
      operator: getRandomInt(1, 100) % 2 === 0 ? '+' : ('-' as Operator),
      num: getRandomInt(-99, 99),
    }),
    [getRandomInt],
  );

  // 式データ組み立て & 取得
  const createFormulaDatum = useCallback(
    (addPartsCount: number) => {
      let num = getRandomInt(1, 100);
      let formula = String(num);

      for (let count = 1; count <= addPartsCount; count += 1) {
        const parts = createPartsOfFormula();
        if (parts.operator === '+') {
          num += parts.num;
          formula += parts.num < 0 ? ` + (${parts.num})` : ` + ${parts.num}`;
        } else if (parts.operator === '-') {
          num -= parts.num;
          formula += parts.num < 0 ? ` - (${parts.num})` : ` - ${parts.num}`;
        } else {
          // eslint-disable-next-line no-console
          console.log('invalid operator error');
        }
      }

      const formulaDatum = {
        calcResult: num,
        formula,
        abs: Math.abs(num - 2), // 2との絶対値
        isCorrect: false,
      } as Formula;
      return formulaDatum;
    },
    [getRandomInt, createPartsOfFormula],
  );

  // 正答が複数存在するかチェック
  const isDuplicationAbs = useCallback((formulaList: Formula[]) => {
    const absList = formulaList.map((data) => data.abs);
    return Array.from(new Set(absList)).length < BUTTON_COUNT;
  }, []);

  // 正答フラグを反映した式データを取得
  const getSettingCorrectFormulaData = useCallback((formulaList: Formula[]) => {
    const min = formulaList
      .map((formula) => formula.abs)
      .reduce((prev, current) => Math.min(prev, current));
    return formulaList.map((formula) => {
      const f = formula;
      f.isCorrect = formula.abs === min;
      return f;
    });
  }, []);

  // 式データの初期化
  const initialFormulaData = useCallback(() => {
    const addPartsCount = diffcultyInfo.FORMULA_PARTS_COUNT - 1;
    let formulaList;

    // 正答が複数存在するパターンの場合は、再度初期化しなおし。
    do {
      formulaList = [];
      for (let count = 1; count <= BUTTON_COUNT; count += 1) {
        formulaList.push(createFormulaDatum(addPartsCount));
      }
    } while (isDuplicationAbs(formulaList));
    setFormulaData(getSettingCorrectFormulaData(formulaList));
  }, [
    diffcultyInfo.FORMULA_PARTS_COUNT,
    createFormulaDatum,
    isDuplicationAbs,
    getSettingCorrectFormulaData,
  ]);

  // 回答チェック
  const checkAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswerCount((count) => count + 1);
      setIsLastAnswerCorrect(true);
    } else {
      setIsLastAnswerCorrect(false);
    }
  }, []);

  // 式データセットアップ
  useEffect(() => {
    initialFormulaData();
  }, [diffcultyInfo, answerCount, initialFormulaData]);

  // 難易度設定
  const selectDiffculty = useCallback((diffculty: Diffculty) => {
    switch (diffculty) {
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
        console.log('invalid diffculty error');
    }
  }, []);

  // 回答数リセット
  const resetAnswerCount = useCallback(() => {
    setAnswerCount(0);
    setCorrectAnswerCount(0);
  }, []);

  // 回答
  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      checkAnswer(isCorrect);
      setIsAnswerDisplay(true);
      setTimeout(() => {
        setIsAnswerDisplay(false);
        setAnswerCount((count) => count + 1);
      }, 1200);
    },
    [checkAnswer],
  );

  return {
    diffcultyInfo,
    formulaData,
    correctAnswerCount,
    isAnswerDisplay,
    isLastAnswerCorrect,
    selectDiffculty,
    resetAnswerCount,
    handleAnswer,
  };
};

export default useQuiz;
