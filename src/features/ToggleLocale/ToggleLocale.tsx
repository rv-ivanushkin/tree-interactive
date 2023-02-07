import React from 'react'
import { useTranslation } from 'react-i18next'
import { SquareButton } from 'src/components'

export const ToggleLocale = () => {
  const { i18n } = useTranslation()
  const { language, changeLanguage } = i18n

  const handleToggleLanguage = () =>
    changeLanguage(language === 'ru' ? 'en' : 'ru')

  return (
    <SquareButton variant="outlined" onClick={handleToggleLanguage}>
      {language}
    </SquareButton>
  )
}
