import React, { useContext } from 'react'
import { FormComponentProps } from 'antd/es/form'
import { Form, Button, Input } from 'antd'
import { itemType, dataType } from './consts'
import { EditableContext } from './editableContext'

import style from './style.module.scss'

interface IProps {
    data: itemType
    form: FormComponentProps['form']
}

export const EditreeTitle:React.FC<IProps> = (props) => {
    const [editKey, editdispath] = useContext(EditableContext).editKey
    const [treedata, datadispath] = useContext(EditableContext).data
    const editing = (key:string):boolean => key === editKey
    const handleEdit = (key:string) => {
        editdispath({
            type:"setkey",
            key:key
        })
    }
    const handleSave = (data:itemType) => {
        const resetTitle = (title:string,key:string,data:dataType):dataType => {
            data.forEach((item) => {
                if(item.children){
                    resetTitle(title,key,item.children)
                }
                if(item.key === key){
                    item.title = title
                }
            })
            return data
        }
        resetTitle(props.form.getFieldsValue()[data.key],data.key,treedata)
        editdispath({
            type: 'setkey',
            key: ''
        })
    }
    const handleDelete = (data:itemType) => {
        const resetTitle = (title:string,key:string,data:dataType):dataType => {
            data.forEach((item,index) => {
                if(item.children){
                    resetTitle(title,key,item.children)
                }
                if(item.key === key){
                    data.splice(index,1)
                }
            })
            return data
        }
        const res = resetTitle(props.form.getFieldsValue()[data.key],data.key,treedata)
        datadispath({
            type: 'setdata',
            data: res
        })
    }

    return (
        <div className={ style.title }>
            {
                editing( props.data.key )?(
                    <Form.Item>
                        {props.form.getFieldDecorator(props.data.key, {
                            rules: [{
                                required:true,
                                message: `${props.data.title} is required`
                            }],
                            initialValue: props.data.title
                        })(<Input />)}
                    </Form.Item>
                ):<span>{props.data.title}</span>
            }
            {
                props.data.operation?(
                    <span>
                        {
                            props.data.operation.includes('edit')&&!editing(props.data.key)?(
                                <Button type='link' onClick={()=>{handleEdit(props.data.key)}}>编辑</Button>
                            ):null
                        }
                        {
                            props.data.operation.includes('edit')&&editing(props.data.key)?(
                                <Button type='link' onClick={()=>{handleSave(props.data)}}>保存</Button>
                            ):null
                        }
                        {
                            props.data.operation.includes('delete')?(<Button type='link' onClick={()=>{handleDelete(props.data)}} >删除</Button>):null
                        }
                    </span>
                ):null
            }
        </div>
    )
}
