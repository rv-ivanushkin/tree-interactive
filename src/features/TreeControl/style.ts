import { Paper, styled } from '@mui/material'

export const TreeControlStyled = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  padding: 20px;
  gap: 10px;
  align-content: start;
`

export const TreeOptionsControlStyled = styled(Paper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: start;
  justify-content: start;
  align-items: center;
  gap: 10px;
`
export const OptionsStyled = styled('div')`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 10px;
`
