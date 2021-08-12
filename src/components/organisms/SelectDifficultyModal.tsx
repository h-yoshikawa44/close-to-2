import { VFC } from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import DifficultyButton from 'components/atoms/DifficultyButton';
import { Diffculty } from 'models/Diffculty';
import { EASY, NORMAL, HARD } from 'constants/game';

type Props = {
  open: boolean;
  handleSelectDifficulty: (selectDiffculty: Diffculty) => void;
};

const SelectDifficultyModal: VFC<Props> = ({
  open,
  handleSelectDifficulty,
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
              onClickAction={handleSelectDifficulty}
            />
          </Box>
          <Box p={2}>
            <DifficultyButton
              difficultyInfo={NORMAL}
              onClickAction={handleSelectDifficulty}
            />
          </Box>
          <Box p={2}>
            <DifficultyButton
              difficultyInfo={HARD}
              onClickAction={handleSelectDifficulty}
            />
          </Box>
        </>
      </Box>
    </Fade>
  </Modal>
);

export default SelectDifficultyModal;
