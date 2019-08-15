import React, { useState } from 'react'
import { Button, Table } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Login } from 'api/user'
import { StoreState as CountStore } from 'store/count-model/types'
import { StoreState as MenuStore } from 'store/menu-model/types'
import { decrement, increment } from 'store/count-model/actions'
import { setMenus } from 'store/menu-model/actions'

import { Editable } from 'components/editable'


const columns = [
    {
        key:'name',
        title: '名称',
        dataIndex: 'name',
        editable: true
    },
    {
        key:'path',
        title: '路径',
        dataIndex: 'path',
        editable: true
    },
    {
        key: 'code',
        title: '代码',
        dataIndex: 'code',
        editable: true
    }
]

const dataSource =  [
    {
        key: 0,
        name: '员工',
        path: '/layout/employee',
        code: 'Employee'
    },
    {
        key: 1,
        name: '设备数据',
        path: '/layout/deviceData',
        code: 'DeviceData'
    },
    {
        key: 2,
        name: '数据库',
        path: '/layout/database',
        code: 'Database'
    },
    {
        key: 3,
        name: '任务',
        path: '/layout/task',
        code: 'Task'
    }
]

interface IProps {
    value:{
        count: number,
        menus: MenuStore['menus']
    },
    onIncrement: () => void,
    onDecrement: () => void,
    onSetMenus: (menus:MenuStore['menus']) => void
}
const Home: React.SFC<IProps> =({ value, onIncrement, onDecrement, onSetMenus }) => {
    const [tableData, setTableData] = useState(dataSource)
    const handleLogin = ():void => {
        Login({
            name:'yc',
            password:'123'
        }).then(res=>{
            console.log(res)
        })
    }
    const handleAddRouter = () => {

        const newData = [...value.menus]
        newData.push({
            index: newData.length,
            name: '',
            path: newData.length.toString(),
            code: '' 
        })
        onSetMenus(newData)
    }
    return (
        <div>
            首页
            <Button onClick={handleLogin}>发送请求</Button>
            <p> Clicked: { value.count } times</p>
            <Button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </Button>
            <Button onClick={ onDecrement }> - </Button>
    
            <Button onClick={ handleAddRouter }>新增路由</Button>
            <Editable columns={columns} dataSource={ value.menus } rowKey="index" />
            {/* <Table columns={columns}  dataSource={ value.menus } rowKey="index"/> */}
        </div>
    )
}

interface StoreState {
    count:CountStore['count'],
    menus:MenuStore['menus']
}
const mapStateToProps = (state: StoreState): { value:StoreState } => ({
    value: state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment()),
    onSetMenus: (menus:MenuStore['menus']) => dispatch(setMenus(menus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)