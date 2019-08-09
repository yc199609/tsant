import React from 'react'
import { Button } from 'antd'
import { Login } from 'api/user'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { StoreState } from 'store/count-model/types'
import { decrement, increment } from 'store/count-model/actions'

interface IProps {
    value:{
        count:number
    },
    onIncrement: () => void,
    onDecrement: () => void
}

const Home: React.SFC<IProps> =({ value, onIncrement, onDecrement }) => {
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
        </div>
    )
}

interface Istate {
    count:number
}

const mapStateToProps = (state: StoreState): { value:Istate } => ({
    value: state
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)