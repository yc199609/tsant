import React,{ useState, useEffect } from 'react'
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
      title: '设备编号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '设备类型',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '标签',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: '开始时间',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '结束时间',
        dataIndex: 'address',
        key: 'address',
    },
    {
      title: '操作',
      render: (text:string, record:object) =>(
        <span>
          <Button type='link'>
            下载CSV
          </Button>
        </span>
      )
    }
]

const DeviceData:React.SFC = () => {
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
            <div>设备数据</div>
            <Table dataSource={dataSource} columns={columns} bordered loading={isloading}/>
        </div>
     )
}

export default DeviceData