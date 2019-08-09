


#### redux 数据持久化

由于项目会涉及到权限的管理，如果不使用redux，mobx之类的状态容器，势必会导致项目比较复杂
在之前使用vue的时候vuex的状态会在页面刷新时被清空，在这里我选择redux配合redux-persist做状态管理
数据持久化，不会在页面刷新时清空状态

安装
```

yarn add redux redux-devtools-extension redux-persist @types/react-redux @types/redux-persist
```

example:

在src下新建 store 文件夹

文档结构

src
|- store
    |- count-model
        |- actions.ts
        |- consts.ts
        |- reducers.ts
        |- types.ts
    |- index.ts

我们创建一个count 的状态用于记录鼠标点击的次数 

```  
\\  src/store/count-model/actions  

import { DECREMENT, DECREMENT_TYPE, INCREMENT, INCREMENT_TYPE } from './consts'

export interface IINCREMENTAction {
  type: INCREMENT_TYPE;
}

export interface IDECREMENTAction {
  type: DECREMENT_TYPE;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;


// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT,
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})

```

```
\\  src/store/count-model/consts.ts

// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT"
export type INCREMENT_TYPE = typeof INCREMENT

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT"
export type DECREMENT_TYPE = typeof DECREMENT

```

```
\\ src/store/count-model/reducers.ts

import { ModifyAction } from './actions'
import { DECREMENT, INCREMENT } from './consts'

export const count = (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

```

```
\\ src/store/count-model/types.ts

export type StoreState = {
    count: number
}

```

```
\\ src/store/index.ts
import { combineReducers, createStore } from 'redux'
import { count } from './count-model/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'   // redux的浏览器插件
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    count
})
  
const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['count'],  // 设置黑名单 除了这个状态之外都做持久化
    // whitelist: ['navigation']  // 设置白名单 只有这个状态做持久化
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools())
export const persistor = persistStore(store)

```

我们在页面之中引入
在react项目的入口文件

```
// src/index.ts

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor }  from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={ null } persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , 
    document.getElementById('root')
)

```


然后在一个需要使用和改变状态的页面，这里做个简单的例子

```
// src/example.tsx


import React from 'react'
import { Button } from 'antd'
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

const Example: React.SFC<IProps> =({ value, onIncrement, onDecrement }) => {
    return (
        <div>
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

```