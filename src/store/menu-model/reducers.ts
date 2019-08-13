import { SETMENUS } from './actions'
import { StoreState } from './types'

let initState = {
    menus: []
}

export const menusReducer = (state:StoreState = initState,action:SETMENUS) => {
    switch(action.type){
        case "SETMENUS":
            state.menus = action.menus
            return state
        default:
            return state
    }
}
