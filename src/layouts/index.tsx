import { createTheme, ThemeProvider, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { NavigationPanel } from 'src/components'
import { defaultOptions } from 'src/theme'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import { useTranslation } from 'react-i18next'
import { selectThemeMode, ToggleLocale, ToggleTheme } from 'src/features'
import { useAppSelector } from 'src/hooks'
import { LayoutsStyled } from './style'

export const Layouts = () => {
  const modeSelect = useAppSelector(selectThemeMode)
  const { t } = useTranslation()
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modeSelect,
        },
        ...defaultOptions,
      }),
    [modeSelect]
  )

  return (
    <ThemeProvider theme={theme}>
      <LayoutsStyled>
        <NavigationPanel>
          <NavigationPanel.LogoButton color="primary">
            <AccountTreeOutlinedIcon />
          </NavigationPanel.LogoButton>
          <NavigationPanel.Center>
            <Typography variant="h6" color="primary">
              {t('navigationPanel.title')}
            </Typography>
          </NavigationPanel.Center>
          <NavigationPanel.Right>
            <ToggleLocale />
            <ToggleTheme />
          </NavigationPanel.Right>
        </NavigationPanel>
      </LayoutsStyled>
    </ThemeProvider>
  )
}
