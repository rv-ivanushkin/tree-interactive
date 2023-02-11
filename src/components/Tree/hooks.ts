import { useContext } from 'react'
import { TreeContext } from './context'

export const useAppContext = () => {
  const data = useContext(TreeContext)
  if (!data) {
    throw new Error('Can not `useAppContext` outside of the `TreeProvider`')
  }
  return data
}
