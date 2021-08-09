import { VFC } from 'react';
import { Box, Fade, Modal } from '@material-ui/core';
import DifficultyButton from '../components/atoms/DifficultyButton';
import { Diffculty } from '../models/Diffculty';
import { EASY, NORMAL, HARD } from '../constants/game';

type Props = {
  open: boolean;
  handleSelectDifficultyAction: (selectDiffculty: Diffculty) => void;
};

const SelectDifficultyModal: VFC<Props> = ({
  open,
  handleSelectDifficultyAction,
}) => (
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
              difficultyInfo={EASY}
              onClickAction={handleSelectDifficultyAction}
            />
          </Box>
          <Box p={2}>
            <DifficultyButton
              difficultyInfo={NORMAL}
              onClickAction={handleSelectDifficultyAction}
            />
          </Box>
          <Box p={2}>
            <DifficultyButton
              difficultyInfo={HARD}
              onClickAction={handleSelectDifficultyAction}
            />
          </Box>
        </>
      </Box>
    </Fade>
  </Modal>
);

export default SelectDifficultyModal;
