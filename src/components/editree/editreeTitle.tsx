import React from 'react'
import { FormComponentProps } from 'antd/es/form'
import { Form, Button, Input } from 'antd'
import { itemType, editingType, handleEditType, resetTitleType, resetDataType } from './consts'
import { useEditData, useEditKey } from './store/provider'

import style from './style.module.scss'

interface IProps {
    data: itemType
    form: FormComponentProps['form']
}

export const EditreeTitle:React.FC<IProps> = (props) => {
    const [editKey, keydispath] = useEditKey()
    const [editData, datadispath] = useEditData()
    
    const editing:editingType = (key) => key === editKey
    const handleEdit:handleEditType = (key) => { keydispath(key) }
    const handleSave = (data:itemType) => {
        const resetTitle:resetTitleType = (props) => {
            props.data.forEach((item) => {
                if(item.children) {
                    resetTitle({title:props.title, key:props.key, data:item.children})
                }
                if(item.key === props.key) {
                    item.title = props.title
                }
            })
            return props.data
        }
        resetTitle({
            title:props.form.getFieldsValue()[data.key],
            key:data.key,
            data:editData
        })
        keydispath('')
    }
    const handleDelete = (obj:itemType) => {
        const resetData:resetDataType = (props) => {
            props.data.forEach((item, index) => {
                if(item.children){
                    resetData({key:props.key, data:item.children})
                }
                if(item.key === props.key){
                    props.data.splice(index, 1)
                }
            })
            return props.data
        }
        const res = [...resetData({key:obj.key, data:editData})]
        datadispath(res)
    }
    return (
        <div className={ style.title }>
            {
                editing( props.data.key )?(
                    <Form.Item className={style.formItem}>
                        {
                            props.form.getFieldDecorator(props.data.key, {
                                rules: [{
                                    required: true,
                                    message: `${props.data.title} is required`
                                }],
                                initialValue: props.data.title
                            })(<Input className={style.input} />)
                        }
                    </Form.Item>
                ):<span>{ props.data.title }</span>
            }
            {
                props.data.operation?(
                    <span>
                        {
                            props.data.operation.includes('edit')&&!editing(props.data.key)?(
                                <Button type='link' onClick={()=>{ handleEdit(props.data.key) }}>编辑</Button>
                            ):null
                        }
                        {
                            props.data.operation.includes('edit')&&editing(props.data.key)?(
                                <Button type='link' onClick={()=>{ handleSave(props.data) }}>保存</Button>
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
