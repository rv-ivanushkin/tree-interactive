import { Button, styled } from '@mui/material'

export const SquareButton = styled(Button)`
  &.MuiButtonBase-root.MuiButton-root {
    padding: 8px !important;
    min-width: auto;
    border-radius: 10px !important;
    width: 34px;
    height: 34px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
  }
`
