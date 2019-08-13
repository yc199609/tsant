import { SETMENUS, SETMENUS_TYPE } from './consts'
import { menu } from './types'

export interface SETMENUS {
    type: SETMENUS_TYPE,
    menus: Array<menu>
}

export const setMenus = (menus:Array<menu>):SETMENUS =>({
    type:SETMENUS,
    menus
})