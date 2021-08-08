import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Timer as TimerIcon } from '@material-ui/icons';

const countDownTimer = ({ countDowntime }) => (
  <Box m={2} fontSize="1.8rem">
    <TimerIcon style={{ paddingRight: '5px' }} />
    <>{countDowntime}</>
  </Box>
);

countDownTimer.propTypes = {
  countDowntime: PropTypes.number.isRequired,
};

export default countDownTimer;
