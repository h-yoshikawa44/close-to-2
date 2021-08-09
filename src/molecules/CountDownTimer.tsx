import { VFC } from 'react';
import { Box } from '@material-ui/core';
import { Timer as TimerIcon } from '@material-ui/icons';

type Props = {
  countDowntime: number;
};

const countDownTimer: VFC<Props> = ({ countDowntime }) => (
  <Box m={2} fontSize="1.8rem">
    <TimerIcon style={{ paddingRight: '5px' }} />
    <>{countDowntime}</>
  </Box>
);

export default countDownTimer;
