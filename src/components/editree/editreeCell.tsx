import React from 'react'
import { FormComponentProps } from 'antd/es/form'
import { Tree } from 'antd'
import { dataType } from './consts'
import { EditreeTitle } from './editreeTitle'

const { TreeNode } = Tree

interface IProps {
    editData:dataType,
    form:FormComponentProps['form']
}

export const EditreeCell = (props:IProps) => {
    return props.editData.map((item)=> {           
        if(item.children) {
            return (
                <TreeNode title={<EditreeTitle data={item} form={props.form} />} key={ item.key } >
                    {
                        EditreeCell({editData:item.children,form:props.form})
                    }
                </TreeNode>
            )
        }
        return <TreeNode title={<EditreeTitle data={item} form={props.form} />} key={ item.key } />
    })
}