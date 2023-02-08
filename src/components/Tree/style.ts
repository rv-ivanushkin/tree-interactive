import { Button, Paper, styled } from '@mui/material'
import { TreeProps } from './types'

export const TreeContainer = styled('div')`
  position: relative;
`

export const TreeNodeStyled = styled('div')`
  position: relative;

  & &::after {
    content: '';
    border-left: 1px solid
      ${({ theme }) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[800]};
    position: absolute;
    top: -3px;
    bottom: 0;
    width: 2px;
    right: auto;
    left: -12.5px;
  }

  & &:last-of-type::after {
    display: none;
  }

  & & button::before {
    content: '';
    position: absolute;
    top: -3px;
    bottom: 50%;
    width: 10px;
    left: -12.5px;
    border-left: 1px solid
      ${({ theme }) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[800]};
    border-bottom: 1px solid
      ${({ theme }) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[800]};
  }
`

export const TreeNodeHeaderStyled = styled(Button)<{
  isShowChildren?: boolean
}>`
  text-transform: none;
  width: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-columns: auto 1fr;
  justify-items: start;

  &.MuiButtonBase-root {
    padding: 4px;
  }

  & svg {
    transform: rotate(
      ${({ isShowChildren }) => (isShowChildren ? '90deg' : '0deg')}
    );
    transition: transform 0.2s ease-in-out;
  }
`

export const TreeNodeCollapse = styled('div')`
  padding-left: 25px;
`

export const TreeStyled = styled(Paper)<TreeProps>`
  position: absolute;
  overflow-y: auto;
  max-height: calc(100%);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  & > div:nth-of-type(1n) :nth-of-type(1n)::after {
    border-left-style: ${({ connectorLineType }) =>
      connectorLineType} !important;
    top: ${({ connectorLineType }) =>
      connectorLineType === 'dashed' ? '17px' : '-3px'} !important;
    bottom: ${({ connectorLineType }) =>
      connectorLineType === 'dashed' ? '4px' : ''} !important;
  }

  & > div:nth-of-type(1n) :nth-of-type(1n)::before {
    border-left-style: ${({ connectorLineType }) =>
      connectorLineType} !important;

    border-bottom-style: ${({ connectorLineType }) =>
      connectorLineType} !important;
  }
`
