import React,{ useContext } from 'react'
import { FormComponentProps } from 'antd/es/form'
import { Tree } from 'antd'
import { dataType } from './consts'
import { EditableContext } from './editableContext'
import { EditreeTitle } from './editreeTitle'
const { TreeNode } = Tree


interface IProps {
    data:dataType,
    form:FormComponentProps['form']
}

export const EditreeCell = (props:IProps) => {
    // console.log(props.data)
    const ss = useContext(EditableContext)
    console.log(ss)
    return props.data.map((item)=> {           
        if(item.children) {
            return (
                <TreeNode title={<EditreeTitle data={item} form={props.form} />} key={ item.key } >
                    {
                        EditreeCell({data:item.children,form:props.form})
                    }
                </TreeNode>
            )
        }
        return <TreeNode title={<EditreeTitle data={item} form={props.form} />} key={ item.key } />
    })
}