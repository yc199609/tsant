import { SETMENUS } from './actions'
import { StoreState } from './types'

export const menus = (state:StoreState['menus'] = [],action:SETMENUS) => {
    switch(action.type){
        case "SETMENUS":
            return action.menus
        default:
            return state
    }
}
