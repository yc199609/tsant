import React from 'react'
import RootTree from './rootTree'
import { EditProvider } from './store/provider'

const Editree:React.SFC = () => {
    return (
        <EditProvider>
            <RootTree/>
        </EditProvider>
    )
}

export default Editree