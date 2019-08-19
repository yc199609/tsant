import React, { useReducer, useContext } from 'react'
import { Tree, Form, Button, Input } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { EditableContext } from './editableContext'
import data1 from './data'
import { editKeyReducer, dataReducer } from './reducer'

import style from './style.module.scss'

const { TreeNode } = Tree
const Editree:React.SFC<FormComponentProps> = ({form}) => {
    const editKey = useReducer(editKeyReducer,'')
    const data = useReducer(dataReducer,data1)
    return (
        <EditableContext.Provider value={{ form, editKey, data }}>
            <Tree showLine blockNode>
                {
                    RenderTree(data1, form)
                }
            </Tree>
        </EditableContext.Provider>
    )
}

const RenderTree = (data:any,form:FormComponentProps['form']) => data.map((item:any) => {
    if(item.children) {
        return (
            <TreeNode title={ titleFN(item, form) } key={ item.key } >
                {RenderTree(item.children, form)}
            </TreeNode>
        )
    }
    return <TreeNode title={ titleFN(item, form) } key={ item.key } />
})

interface IProps {
    data: {
        key: string,
        title: string,
        operation?: Array<string>
        isEdit?: boolean
    },
    form: FormComponentProps['form']
}
const RenderTitle:React.FC<IProps> = ({data, form}) => {
    const [editKey, editdispath] = useContext(EditableContext).editKey
    const [treedata, datadispath] = useContext(EditableContext).data
    // console.log(useContext(EditableContext).data)
    const editing = (key:string):boolean => key === editKey

    const handleEdit = (key:string) => {
        editdispath({
            type:"setkey",
            key:key
        })
    }

    const handleSave = (data:any) => {
        const resetTitle = (title:any,key:any,data:any):any => {
            data.forEach((item:any) => {
                if(item.children){
                    resetTitle(title,key,item.children)
                }
                if(item.key === key){
                    item.title = title
                }
            })
            return data
        }
        resetTitle(form.getFieldsValue()[data.key],data.key,treedata)
        editdispath({
            type: 'setkey',
            key: ''
        })
    }
    const handleDelete = (data:any) => {
        const resetTitle = (title:any,key:any,data:any):any => {
            data.forEach((item:any,index:number) => {
                if(item.children){
                    resetTitle(title,key,item.children)
                }
                if(item.key === key){
                    data.splice(index,1)
                }
            })
            return data
        }
        const res = resetTitle(form.getFieldsValue()[data.key],data.key,treedata)
        datadispath({
            type: 'setdata',
            data: res
        })
    }

    return (
        <div className={ style.title }>
            {
                editing( data.key )?(
                    <Form.Item>
                        {form.getFieldDecorator(data.key, {
                            rules: [{
                                required:true,
                                message: `${data.title} is required`
                            }],
                            initialValue: data.title
                        })(<Input />)}
                    </Form.Item>
                ):<span>{data.title}</span>
            }
            {
                data.operation?(
                    <span>
                        {
                            data.operation.includes('edit')&&!editing(data.key)?(
                                <Button type='link' onClick={()=>{handleEdit(data.key)}}>编辑</Button>
                            ):null
                        }
                        {
                            data.operation.includes('edit')&&editing(data.key)?(
                                <Button type='link' onClick={()=>{handleSave(data)}}>保存</Button>
                            ):null
                        }
                        {
                            data.operation.includes('delete')?(<Button type='link' onClick={()=>{handleDelete(data)}} >删除</Button>):null
                        }
                    </span>
                ):null
            }
        </div>
    )
}

const titleFN:React.SFC = ( item:any, form:any ) =>{
    return(
        <>
            <RenderTitle data={ item } form={ form } />
        </>
    )
}

export default Form.create()(Editree)