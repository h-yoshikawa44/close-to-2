import { VFC } from 'react';
import Button from '@material-ui/core/Button';
import { BUTTON_WIDTH, BUTTON_COLORS } from 'constants/game';

type Props = {
  index: number;
  formula: string;
  onClickAction: (index: number) => void;
};

const AnswerButton: VFC<Props> = ({ index, formula, onClickAction }) => (
  <Button
    variant="contained"
    style={{
      width: `${BUTTON_WIDTH}px`,
      color: 'white',
      backgroundColor: BUTTON_COLORS[index],
    }}
    onClick={() => onClickAction(index)}
  >
    {formula}
  </Button>
);

export default AnswerButton;
