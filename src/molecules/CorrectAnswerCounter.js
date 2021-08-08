import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { PanoramaFishEye as PanoramaFishEyeIcon } from '@material-ui/icons';

const CorrectAnswerCounter = ({ correctAnswerCount }) => (
  <Box m={2} fontSize="1.8rem">
    <PanoramaFishEyeIcon />
    <>{`：${correctAnswerCount}`}</>
  </Box>
);

CorrectAnswerCounter.propTypes = {
  correctAnswerCount: PropTypes.number.isRequired,
};

export default CorrectAnswerCounter;
