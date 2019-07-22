import React, { useContext } from 'react'
import { Layout, Icon, Menu } from 'antd'
import { CollapsedContext } from '../context'
import { RouteComponentProps } from 'react-router-dom'
const { Sider } = Layout

const ContainerSider:React.SFC<RouteComponentProps> = ({match, history})=>{
    const collapsed = useContext(CollapsedContext)
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={['1']}
                onClick={(item)=>{
                    history.push(`${match.url}/${item.key}`)
                }}
            >
                <Menu.Item key="home" className="menu-item">
                    <Icon type="home" />
                    <span>首页</span>
                </Menu.Item>
                <Menu.Item key="employee" className="menu-item">
                    <Icon type="user" />
                    <span>员工</span >
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default ContainerSider
