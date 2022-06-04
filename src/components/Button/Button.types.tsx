import { SxProps } from "@mui/material";

export interface ButtonProps {
    label: string;

    className?: string
    variant?: 'text' | 'contained' | 'outlined';
    sx?: SxProps;
}