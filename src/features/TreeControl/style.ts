import { Paper, styled } from '@mui/material'

export const TreeControlStyled = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  gap: 10px;
`

export const TreeOptionsControlStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: start;
  justify-content: start;
  align-items: center;
  gap: 10px;
`
