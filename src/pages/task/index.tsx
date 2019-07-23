import React, { useState, useEffect } from 'react'
import { Table } from 'antd'

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    }
]
  
const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }
]


const Task:React.FC = () => {
    const [isloading,setloading] = useState(true)
    useEffect(()=>{
        const getTableData = async() => {
            return 
        }
        getTableData()
            .then(res=>{
                setloading(false)
            })
    })
    return (
        <div>
            <div>定制任务</div>
            <Table dataSource={dataSource} columns={columns} bordered loading={isloading}/>
        </div>
        
    )
}

export default Task