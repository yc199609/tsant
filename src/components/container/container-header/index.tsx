import React, { useContext } from 'react'
import { Layout, Icon, Avatar } from 'antd'
import { CollapsedContext } from '../context'
const { Header } = Layout

interface Iprops {
    setcollapsed:(arg:boolean) =>void
}

const ContainerHeader:React.SFC<Iprops> = ({setcollapsed})=>{
    const collapsed = useContext(CollapsedContext)
    return(
        <Header className="header">
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={()=>setcollapsed(!collapsed)}
            />
            <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Header>
    )
}

export default ContainerHeader