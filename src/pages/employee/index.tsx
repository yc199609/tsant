import React from 'react'
import { Tree, Button } from 'antd'
// import { TreeProps } from 'antd/es/tree/Tree'
import style from './style.module.scss'

const { TreeNode } = Tree
const Employee:React.SFC = () => {
    return (
        <Tree showLine defaultExpandedKeys={['0-0-0']} blockNode>
            <TreeNode title="parent 1" key="0-0">
            <TreeNode title= {
                <div className={style.text}>
                    <span>伟大的袁常</span>
                    <Button type="link" onClick={()=>{console.log(23)}}>sdsds</Button>
                </div>
            } key="0-0-0">
                <TreeNode title="leaf" key="0-0-0-0" />
                <TreeNode title="leaf" key="0-0-0-1" />
                <TreeNode title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
                <TreeNode title="leaf" key="0-0-2-0" />
                <TreeNode title="leaf" key="0-0-2-1" />
            </TreeNode>
            </TreeNode>
        </Tree>
    )
}

export default Employee