import { dataType } from './consts'

interface editKeyAction {
    type?: string
    key: string
}

export const editKeyReducer = (state:string,action:editKeyAction) => {
    switch (action.type) {
        case 'setkey':
            return  action.key
        default:
            return state
    }
}

interface dataAction {
    type?: string
    data: dataType
}

export const dataReducer = (state:dataType,action:dataAction) => {
    // console.log(action)
    switch (action.type) {
        case "setdata":
            state = action.data
            return state
        default:
            return state
    }
}