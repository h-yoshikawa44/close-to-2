import { FC } from 'react';
import Box from '@mui/material/Box';
import { PanoramaFishEye as PanoramaFishEyeIcon } from '@mui/icons-material';

type Props = {
  correctAnswerCount: number;
};

const CorrectAnswerCounter: FC<Props> = ({ correctAnswerCount }) => (
  <Box sx={{ m: 2, fontSize: '1.8rem' }}>
    <PanoramaFishEyeIcon />
    <>{`：${correctAnswerCount}`}</>
  </Box>
);

export default CorrectAnswerCounter;
