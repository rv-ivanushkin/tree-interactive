import React from 'react'
import { TreeContextProps } from './types'

export const TreeContext = React.createContext<TreeContextProps | null>(null)

export const TreeProvider = TreeContext.Provider
