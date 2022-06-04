import React from "react";
import clsx from 'clsx';
import MuiButton from '@mui/material/Button';

import { ButtonProps } from "./Button.types";
import buttonStyles from "./styles";

const Button = (props: ButtonProps) => {
  const { className, variant='text', sx, label } = props;
  const classes = buttonStyles();

  return (
      <MuiButton
        className={clsx(classes.DuiButton, className ?? null)} 
        sx={sx ?? undefined} 
        variant={variant}
      >
        {label}
      </MuiButton>
  );
}
export default Button;