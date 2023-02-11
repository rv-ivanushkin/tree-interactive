import React, { memo } from 'react'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import { Checkbox } from '@mui/material'
import { TreeNodeCollapse, TreeNodeHeaderStyled, TreeNodeStyled } from './style'
import { TreeNodeProps } from './types'
import { useAppContext } from './hooks'

// eslint-disable-next-line react/display-name
export const TreeNode = memo(
  ({ node, dense, isChecked, expandedAll }: TreeNodeProps) => {
    const { checked, setChecked, expanded, setExpanded } = useAppContext()

    const sizeButton = dense ? 'small' : 'large'
    const sizeCheckbox = dense ? 'small' : 'medium'

    const isShowChildren = expandedAll || expanded.includes(node.id)
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
                expandedAll={expandedAll}
              />
            ))}
        </TreeNodeCollapse>
      </TreeNodeStyled>
    )
  }
)
