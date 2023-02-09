import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import { TreeNodeCollapse, TreeNodeHeaderStyled, TreeNodeStyled } from './style'
import { TreeNodeProps } from './types'

export const TreeNode = ({ node, dense }: TreeNodeProps) => {
  const sizeButton = dense ? 'large' : 'small'

  const [isShowChildren, setIsShowChildren] = useState(false)

  const handleShowChildren = () => {
    setIsShowChildren((prev) => !prev)
  }

  return (
    <TreeNodeStyled>
      <TreeNodeHeaderStyled
        isShowChildren={isShowChildren}
        onClick={handleShowChildren}
        disableRipple
        size={sizeButton}
      >
        <ArrowRightRoundedIcon fontSize="small" color="action" />
        {node.label}
      </TreeNodeHeaderStyled>
      <TreeNodeCollapse>
        {isShowChildren &&
          node.children?.map((child, index) => (
            <TreeNode
              key={`_${index.toString()}_${child.id}`}
              node={node}
              dense={dense}
            />
          ))}
      </TreeNodeCollapse>
    </TreeNodeStyled>
  )
}
