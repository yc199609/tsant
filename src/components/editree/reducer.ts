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
    data: Array<any>
}

export const dataReducer = (state:Array<any>,action:dataAction) => {
    switch (action.type) {
        case "setdata":
            return action.data
        default:
            return state
    }
}