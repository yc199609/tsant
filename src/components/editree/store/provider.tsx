import React, { useReducer, useContext } from 'react'
import data1 from './data'
import { dataValueReducer,editKeyReducer } from './reducer'

const EditreeContext = React.createContext<any>({});

export const EditProvider:React.SFC = ({children}) => {
    const contextData = useReducer(dataValueReducer,data1)
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