import React, { VFC } from 'react';
import Button from '@mui/material/Button';

type Props = {
  text: string;
  onClickAction: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton: VFC<Props> = ({ text, onClickAction }) => (
  <Button onClick={onClickAction} variant="contained" color="secondary">
    {text}
  </Button>
);

export default PrimaryButton;
