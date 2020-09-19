import React from 'react';
import PropTypes from 'prop-types';
import { Box, Fade, Modal } from '@material-ui/core';
import * as Diffculty from '../constants/Diffculty';
import DifficultyButton from '../atoms/DifficultyButton';

const SelectDifficultyModal = ({ open, handleSelectDifficultyAction }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Fade in={open}>
        <Box
          p={4}
          width={400}
          bgcolor="background.paper"
          boxShadow={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <h2 id="transition-modal-title">難易度選択</h2>
          <p id="transition-modal-description">
            難易度に応じて、式が長くなります
          </p>
          <>
            <Box p={2}>
              <DifficultyButton
                difficulty={Diffculty.EASY}
                onClickAction={handleSelectDifficultyAction}
              />
            </Box>
            <Box p={2}>
              <DifficultyButton
                difficulty={Diffculty.NORMAL}
                onClickAction={handleSelectDifficultyAction}
              />
            </Box>
            <Box p={2}>
              <DifficultyButton
                difficulty={Diffculty.HARD}
                onClickAction={handleSelectDifficultyAction}
              />
            </Box>
          </>
        </Box>
      </Fade>
    </Modal>
  );
};

SelectDifficultyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSelectDifficultyAction: PropTypes.func.isRequired,
};

export default SelectDifficultyModal;
