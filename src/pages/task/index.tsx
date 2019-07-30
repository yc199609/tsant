import React, { useState, useEffect } from 'react'
import { Table, Button, Icon } from 'antd'

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
      title: '任务名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '定制时间',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '状态',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '详情',
      render: (text:string, record:object) =>(
        <span>
          <Button type='link'>
            查看数据
          </Button>
        </span>
      )
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
        <div>
          <Button type="primary">
            <Icon type="plus" /> 定制任务
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} bordered loading={isloading}/>
      </div>  
    )
}

export default Task