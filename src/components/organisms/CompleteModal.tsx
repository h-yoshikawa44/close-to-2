import { VFC } from 'react';
import { Box, Fade, Modal } from '@material-ui/core';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import SecondaryButton from 'components/atoms/SecondaryButton';
import { DiffcultyJP } from 'models/Diffculty';

type Props = {
  open: boolean;
  diffculty: DiffcultyJP;
  correctAnswerCount: number;
  handleRestartAction: VoidFunction;
};

const CompleteModal: VFC<Props> = ({
  open,
  diffculty,
  correctAnswerCount,
  handleRestartAction,
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
        <h2 id="transition-modal-title">{`${diffculty} ${correctAnswerCount}回正解！`}</h2>
        <p id="transition-modal-description">お疲れさまでしたー</p>
        <Box p={2}>
          <TwitterShareButton
            url="https://h-yoshikawa44.github.io/close-to-2"
            title={`${diffculty} - ${correctAnswerCount}回正解！`}
            hashtags={['close_to_2', 'web1week']}
          >
            <TwitterIcon size={40} borderRadius={10} />
          </TwitterShareButton>
        </Box>
        <Box p={2}>
          <SecondaryButton
            text="再チャレンジ"
            onClickAction={handleRestartAction}
          />
        </Box>
      </Box>
    </Fade>
  </Modal>
);

export default CompleteModal;
