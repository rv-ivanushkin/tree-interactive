import React, { useContext, useMemo, useState } from 'react'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import { Checkbox } from '@mui/material'
import { TreeNodeCollapse, TreeNodeHeaderStyled, TreeNodeStyled } from './style'
import { TreeNodeProps } from './types'
import { TreeContext } from './context'

export const TreeNode = ({ node, dense, isChecked }: TreeNodeProps) => {
  const { checked, setChecked, expanded, setExpanded } = useContext(TreeContext)
  const sizeButton = dense ? 'small' : 'large'
  const sizeCheckbox = dense ? 'small' : 'medium'

  const isShowChildren = expanded.includes(node.id)
  const isCheckChildren = checked.includes(node.id)

  const handleShowChildren = () => {
    if (!isShowChildren) {
      setExpanded([...expanded, node.id])
    } else {
      setExpanded(expanded.filter((id) => id !== node.id))
    }
  }

  const handleClick = (event: Event) => {
    event.stopPropagation()
  }

  const handleCheck = (_, isCheck: boolean) => {
    if (isCheck) {
      setChecked([...checked, node.id])
    } else {
      setChecked(checked.filter((id) => id !== node.id))
    }
  }

  return (
    <TreeNodeStyled>
      <TreeNodeHeaderStyled
        isShowChildren={isShowChildren}
        onClick={handleShowChildren}
        disableRipple
        size={sizeButton}
      >
        {Boolean(node.children?.length) && (
          <ArrowRightRoundedIcon fontSize="small" color="action" />
        )}
        {isChecked && (
          <Checkbox
            onClick={handleClick}
            size={sizeCheckbox}
            onChange={handleCheck}
            checked={isCheckChildren}
          />
        )}
        {node.label}
      </TreeNodeHeaderStyled>
      <TreeNodeCollapse>
        {isShowChildren &&
          node.children?.map((child, index) => (
            <TreeNode
              key={`_${index.toString()}_${child.id}`}
              node={child}
              dense={dense}
              isChecked={isChecked}
            />
          ))}
      </TreeNodeCollapse>
    </TreeNodeStyled>
  )
}
