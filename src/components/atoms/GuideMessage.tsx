import { VFC } from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  answerDisplay: boolean;
  lastAnswerCorrect: boolean;
};

const GuideMessage: VFC<Props> = ({ answerDisplay, lastAnswerCorrect }) => (
  <Typography>
    {answerDisplay && lastAnswerCorrect && '正解！'}
    {answerDisplay && !lastAnswerCorrect && '不正解...'}
    {!answerDisplay && '一番「2」に近い式はどれかな？'}
  </Typography>
);

export default GuideMessage;
