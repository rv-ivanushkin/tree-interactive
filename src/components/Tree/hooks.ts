import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { TreeContext } from './context'
import { TreeNode, UseTreeNodesProps, UseTreeNodeStateProps } from './types'
import { filterNodesByKey } from './utils'

export const useAppContext = () => {
  const data = useContext(TreeContext)
  if (!data) {
    throw new Error('Can not `useAppContext` outside of the `TreeProvider`')
  }
  return data
}

export const useTreeNodes = ({
  nodes: defaultNodes,
  filter,
}: UseTreeNodesProps) => {
  const [nodes, setNodes] = useState<TreeNode[]>([])

  useEffect(() => {
    setNodes(defaultNodes)
  }, [defaultNodes])

  useEffect(() => {
    if (filter) {
      setNodes(filterNodesByKey(nodes, filter))
    } else {
      setNodes(defaultNodes)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return { nodes }
}

export const useTreeNodeState = ({
  checked: defaultChecked,
  expanded: defaultExpanded,
  onChecked,
  onExpanded,
}: UseTreeNodeStateProps) => {
  const [checked, setChecked] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>([])

  const updateChecked = useCallback((ids: string[]) => {
    if (onChecked) {
      onChecked(ids)
    } else {
      setChecked(ids)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateExpanded = useCallback((ids: string[]) => {
    if (onExpanded) {
      onExpanded(ids)
    } else {
      setExpanded(ids)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextValue = useMemo(
    () => ({
      checked,
      setChecked: updateChecked,
      expanded,
      setExpanded: updateExpanded,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checked, expanded]
  )

  useEffect(() => {
    if (Array.isArray(defaultChecked)) {
      setChecked(defaultChecked)
    }
  }, [defaultChecked])

  useEffect(() => {
    if (Array.isArray(defaultExpanded)) {
      setExpanded(defaultExpanded)
    }
  }, [defaultExpanded])

  return { contextValue }
}
