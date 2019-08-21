import React from 'react'
import RootTree from './rootTree'
import { EditProvider } from './store/provider'

interface IProps {
    data:Array<any>
}

const Editree:React.SFC<IProps> = (props) => {
    return (
        <EditProvider data={props.data}>
            <RootTree/>
        </EditProvider>
    )
}

export default Editree