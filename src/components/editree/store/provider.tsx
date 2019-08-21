import React, { useReducer, useContext } from 'react'
import { dataValueReducer,editKeyReducer } from './reducer'

const EditreeContext = React.createContext<any>({});

interface IProps {
    data:Array<any>
}

export const EditProvider:React.SFC<IProps> = ({children,data}) => {
    const contextData = useReducer(dataValueReducer,data)
    const contextEditKey = useReducer(editKeyReducer,'')
    return (
        <EditreeContext.Provider value={{contextData,contextEditKey}}>
            {children}
        </EditreeContext.Provider>
    )
}

export const useEditData = () => {
    const contextData = useContext(EditreeContext).contextData
    return contextData
}
export const useEditKey = () => {
    const contextEditKey = useContext(EditreeContext).contextEditKey
    return contextEditKey
}