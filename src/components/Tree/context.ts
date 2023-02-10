import React from 'react'
import { TreeContextProps } from './types'

export const TreeContext = React.createContext<TreeContextProps>({
  checked: [],
  setChecked: () => {},
  expanded: [],
  setExpanded: () => {},
})
