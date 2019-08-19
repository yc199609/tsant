import React, { SFC, useContext, Children } from 'react'
import Form, { FormComponentProps } from 'antd/es/form'
import { InputNumber, Input, Tree, Button } from 'antd'
import { EditableContext } from './editableContext'

const { TreeNode } = Tree

interface IProps {
    title: string,
    key: string,
    dataRef: {
        title: string,
        opration?:Array<string>
    }
}

export const EditreeCell:SFC<IProps> = (props) => {
    const form = useContext(EditableContext)
    return(
        <>
            <TreeNode key={props.key} title={
                renderTitle(props.dataRef)
            }>
                {props.children}
            </TreeNode>
        </>
    )
}

interface IData {
    title: string,
    operation?: Array<string>
}

const renderTitle = (data:IData) => {
    return (
        <div>
            <span>{data.title}</span>
            {
                data.operation?(
                    <span>
                        {
                            data.operation.includes('edit')?(<Button>编辑</Button>):null
                        }
                        {
                            data.operation.includes('delete')?(<Button>删除</Button>):null
                        }
                    </span>
                ):null
            }
        </div>
    )
}