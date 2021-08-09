import { VFC } from 'react';
import Box from '@material-ui/core/Box';
import { PanoramaFishEye as PanoramaFishEyeIcon } from '@material-ui/icons';

type Props = {
  correctAnswerCount: number;
};

const CorrectAnswerCounter: VFC<Props> = ({ correctAnswerCount }) => (
  <Box m={2} fontSize="1.8rem">
    <PanoramaFishEyeIcon />
    <>{`：${correctAnswerCount}`}</>
  </Box>
);

export default CorrectAnswerCounter;
