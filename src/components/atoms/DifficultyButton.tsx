import { VFC } from 'react';
import Button from '@mui/material/Button';
import green from '@mui/material/colors/green';
import { Diffculty, DiffcultyInfo } from 'models/Diffculty';

type Props = {
  difficultyInfo: DiffcultyInfo;
  onClickAction: (selectDiffculty: Diffculty) => void;
};

const DifficultyButton: VFC<Props> = ({ difficultyInfo, onClickAction }) => (
  <>
    {difficultyInfo.EN_WORD === 'easy' && (
      <Button
        variant="contained"
        style={{ color: 'white', backgroundColor: green[600] }}
        onClick={() => onClickAction(difficultyInfo.EN_WORD)}
      >
        {`${difficultyInfo.JP_WORD}（数値${difficultyInfo.FORMULA_PARTS_COUNT}つ）`}
      </Button>
    )}
    {(difficultyInfo.EN_WORD === 'normal' ||
      difficultyInfo.EN_WORD === 'hard') && (
      <Button
        variant="contained"
        color={difficultyInfo.EN_WORD === 'normal' ? 'primary' : 'secondary'}
        onClick={() => onClickAction(difficultyInfo.EN_WORD)}
      >
        {`${difficultyInfo.JP_WORD}（数値${difficultyInfo.FORMULA_PARTS_COUNT}つ）`}
      </Button>
    )}
  </>
);

export default DifficultyButton;
