import React, { useContext } from 'react'
import { Layout, Icon, Menu } from 'antd'
import { CollapsedContext } from '../context'
import { RouteComponentProps } from 'react-router-dom'
import { StoreState as MenuStore } from 'store/menu-model/types'
const { Sider } = Layout

interface IProps {
    menus: MenuStore['menus']
}

const ContainerSider:React.SFC<RouteComponentProps&IProps> = ({match, history, menus})=>{
    const collapsed = useContext(CollapsedContext)
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={['1']}
                onClick={(item)=>{
                    history.push(`${item.key}`)
                }}
            >
                <Menu.Item key="/layout/home" className="menu-item">
                    <Icon type="home" />
                    <span>首页</span>
                </Menu.Item>
                {
                    menus.map(item=>{
                        return (
                            <Menu.Item key={item.path} className="menu-item">
                                <Icon type="user" />
                                <span>{item.name}</span >
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}

export default ContainerSider
