import { combineReducers, createStore } from 'redux'
import { count } from './count-model/reducers'
import { menus } from './menu-model/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    count,
    menus
})
  
const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['count'],
    whitelist: ['menus']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools())
export const persistor = persistStore(store)
