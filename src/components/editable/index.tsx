import React,{ useState } from 'react'
import { Table, Button, Form, Popconfirm } from 'antd'
import { FormComponentProps } from 'antd/es/form'

import { EditableCell } from './editableCell'
import { EditableContext } from './editableContext'
import { StoreState as MenuStore } from 'store/menu-model/types'

import './style.scss'

const components = {
    body: {
        cell: EditableCell,
    },
}

interface IProps extends FormComponentProps {
    rowKey: string,
    columns: Array<any>,
    dataSource: MenuStore['menus'],
    setTableData:(menus:MenuStore['menus'])=> void
}

const Etable:React.FC<IProps> = ({rowKey,dataSource,form,columns,setTableData}) => {
    const [editKey, setEditKey] = useState<string|number>('')

    let tableColumns = [...columns]
    tableColumns.push({
        key:'operation',
        dataIndex:'operation',
        title: '操作',
        render: (text:any, record:recordType) => {
            const editable = isEditing(record)
            return editable ? (
                <span>
                    <Button onClick={()=>save(form,record.index)}>save</Button>
                    <Popconfirm title="Sure to cancel?" onConfirm={()=>delRow(record.index)}>
                        <Button>删除</Button>
                    </Popconfirm> 
                </span>
            ):(
                <span>
                    <Button onClick={()=>edit(record.index)}>edit</Button>
                    <Popconfirm title="Sure to cancel?" onConfirm={()=>delRow(record.index)}>
                        <Button>删除</Button>
                    </Popconfirm>
                </span>
            )
        }
    })
    tableColumns = tableColumns.map(item=>{
        if(!item.editable){
            return item
        }
        return{
            ...item,
            onCell:(record:recordType)=>({
                inputType: 'text',
                dataIndex: item.dataIndex,
                title: item.title,
                editing: isEditing(record),
                record
            })
        }
    })

    const record = dataSource[0]
    type recordType = typeof record
    type formType = typeof form 

    const isEditing = (record:recordType) => record.index === editKey

    const delRow = (key:number) => {
        const newData = [...dataSource]
        const index = newData.findIndex(item => key === item.index)
        if(index > -1){
            newData.splice(index, 1)
            newData.map((item, index) => ({...item, key:index}))
            setTableData(newData)
        }
    }

    const save = (form:formType,key:number) => {
        form.validateFields((error:any, row:any)=>{
            if(error){
                return
            }
            const newData = [...dataSource]
            const index = newData.findIndex(item=> key === item.index)
            if(index > -1){
                const item = newData[index]
                newData.splice(index, 1, {
                    ...item,
                    ...row
                })
                setTableData(newData)
                setEditKey('')
            }
        })
    }

    const edit = (key:number) => {
        setEditKey(key)
    }

    return (
        <EditableContext.Provider value={form}>
            <Table
                components={ components }
                dataSource={ dataSource }
                columns={ tableColumns }
                rowKey={ rowKey }
                bordered
            />
        </EditableContext.Provider>
    )
}

export const Editable = Form.create<IProps>()(Etable)
