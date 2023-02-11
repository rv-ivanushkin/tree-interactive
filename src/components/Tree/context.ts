import React from 'react'
import { TreeContextProps } from './types'

export const TreeContext = React.createContext<TreeContextProps | null>({
  checked: [],
  setChecked: () => {},
  expanded: [],
  setExpanded: () => {},
})

export const TreeProvider = TreeContext.Provider
