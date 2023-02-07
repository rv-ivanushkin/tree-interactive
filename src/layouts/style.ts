import { Box, styled } from '@mui/material'

export const LayoutsStyled = styled(Box)`
  background: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.background.default};
`
