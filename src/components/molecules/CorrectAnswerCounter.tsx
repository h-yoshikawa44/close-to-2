import { VFC } from 'react';
import Box from '@mui/material/Box';
import { PanoramaFishEye as PanoramaFishEyeIcon } from '@mui/icons-material';

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
