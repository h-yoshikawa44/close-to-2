import { FC } from 'react';
import Button from '@mui/material/Button';
import { BUTTON_WIDTH, BUTTON_COLORS } from 'constants/game';

type Props = {
  index: number;
  formula: string;
  isCorrect: boolean;
  onClickAction: (isCorrect: boolean) => void;
};

const AnswerButton: FC<Props> = ({
  index,
  formula,
  isCorrect,
  onClickAction,
}) => (
  <Button
    variant="contained"
    style={{
      width: `${BUTTON_WIDTH}px`,
      color: 'white',
      backgroundColor: BUTTON_COLORS[index],
    }}
    onClick={() => onClickAction(isCorrect)}
  >
    {formula}
  </Button>
);

export default AnswerButton;
