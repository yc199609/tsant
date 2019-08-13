import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Login } from 'api/user'
import { StoreState as CountStore } from 'store/count-model/types'
import { StoreState as MenuStore } from 'store/menu-model/types'
import { decrement, increment } from 'store/count-model/actions'
import { setMenus } from 'store/menu-model/actions'

import { HomeEditForm } from './form'

interface IProps {
    value:{
        count: number,
        menus: MenuStore['menus']
    },
    onIncrement: () => void,
    onDecrement: () => void,
    onSetMenus: () => void
}

const Home: React.SFC<IProps> =({ value, onIncrement, onDecrement, onSetMenus }) => {
    const handleLogin = ():void => {
        Login({
            name:'yc',
            password:'123'
        }).then(res=>{
            console.log(res)
        })
    }
    return (
        <div>
            首页
            <Button onClick={handleLogin}>发送请求</Button>
            <p> Clicked: { value.count } times</p>
            <Button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </Button>
            <Button onClick={ onDecrement }> - </Button>
            <Button onClick={ onSetMenus }>设置菜单</Button>
            <HomeEditForm menus={ value.menus } />
            
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

const testArray =  [
    {
        name: '首页',
        path:'/layout/home',
        code: '1'
    }
]

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment()),
    onSetMenus: () => dispatch(setMenus(testArray))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)