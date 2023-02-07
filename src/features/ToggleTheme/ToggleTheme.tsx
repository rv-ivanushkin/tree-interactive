import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useActionCreators, useAppSelector } from 'src/hooks'
import { SquareButton } from 'src/components'
import { modeSlice, selectThemeMode } from './slice'

export const ToggleTheme = () => {
  const action = useActionCreators(modeSlice.actions)
  const modeSelect = useAppSelector(selectThemeMode)
  const Icon = modeSelect === 'light' ? DarkModeIcon : LightModeIcon

  const handleToggleMode = () => action.toggle()

  return (
    <SquareButton onClick={handleToggleMode}>
      <Icon />
    </SquareButton>
  )
}
