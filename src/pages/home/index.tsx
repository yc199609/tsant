import React, { useState  } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

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
    const [menus,setMenus] = useState([...value.menus])
    const handleAddRouter = () => {
        const newData = [...menus]
        newData.push({
            index: newData.length,
            name: '',
            path: newData.length.toString(),
            code: '' 
        })
        setMenus(newData)
    }
    const submit = () => {
        onSetMenus(menus)
    }
    return (
        <div>
            首页
            <p> Clicked: { value.count } times</p>
            <Button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </Button>
            <Button onClick={ onDecrement }> - </Button>
            <Button onClick={ handleAddRouter }>新增路由</Button>
            <Editable columns={columns} dataSource={ menus } rowKey="index" setTableData={setMenus} />
            <Button onClick={submit}>确定</Button>
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

// 将对应action插入到组件的props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment()),
    onSetMenus: (menus:MenuStore['menus']) => dispatch(setMenus(menus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)