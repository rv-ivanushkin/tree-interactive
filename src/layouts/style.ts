import { Box, styled } from '@mui/material'

export const LayoutsStyled = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 20px 40px;
  background: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.background.default};
`
