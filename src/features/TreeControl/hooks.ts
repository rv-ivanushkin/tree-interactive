import { useState } from 'react'
import { ConnectorLineType } from 'src/components/Tree/types'

export interface OptionsProps {
  dense: boolean
  isChecked: boolean
  connectorLineType: ConnectorLineType
}

type UseOptionsProps = Partial<OptionsProps>

type UpdateOptionProps = {
  [key in keyof OptionsProps]?: OptionsProps[key]
}

export type OptionsNames = keyof OptionsProps

type UpdateOption = (props: UpdateOptionProps) => void

const initialState: OptionsProps = {
  dense: false,
  isChecked: false,
  connectorLineType: 'dashed',
}

export const useOptions = (defaultState: UseOptionsProps) => {
  const [options, setOptions] = useState<OptionsProps>({
    ...initialState,
    ...defaultState,
  })

  const updateOption: UpdateOption = (props) => {
    setOptions((prev) => ({
      ...prev,
      ...props,
    }))
  }

  return { ...options, updateOption }
}
