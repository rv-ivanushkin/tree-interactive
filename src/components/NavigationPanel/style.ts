import { IconButton, IconButtonProps, styled } from '@mui/material'

const LogoButton = styled(IconButton)<IconButtonProps>`
  grid-area: logo;
`
const Center = styled('div')`
  grid-area: center;
`
const Right = styled('div')`
  grid-area: right;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const NavigationPanelStyled = styled('div')`
  display: grid;
  grid-template-areas: 'logo center right';
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

export const NavigationPanel = Object.assign(NavigationPanelStyled, {
  LogoButton,
  Center,
  Right,
})
