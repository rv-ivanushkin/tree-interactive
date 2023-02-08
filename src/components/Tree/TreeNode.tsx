import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import { TreeNodeCollapse, TreeNodeHeaderStyled, TreeNodeStyled } from './style'
import { TreeNodeProps } from './types'

export const TreeNode = ({ node }: TreeNodeProps) => {
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
      >
        <ArrowRightRoundedIcon fontSize="small" color="action" />
        {node.label}
      </TreeNodeHeaderStyled>
      <TreeNodeCollapse>
        {isShowChildren &&
          node.children?.map((child, index) => (
            <TreeNode key={`_${index.toString()}_${child.id}`} node={node} />
          ))}
      </TreeNodeCollapse>
    </TreeNodeStyled>
  )
}
