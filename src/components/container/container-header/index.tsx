import React, { useContext } from 'react'
import { Layout, Icon, Avatar, Menu, Dropdown } from 'antd'
import { CollapsedContext } from '../context'
const { Header } = Layout

interface Iprops {
    setcollapsed:(arg:boolean) =>void
}

const menu = (
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)


const ContainerHeader:React.SFC<Iprops> = ({setcollapsed})=>{
    const collapsed = useContext(CollapsedContext)
    return(
        <Header className="header">
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={()=>setcollapsed(!collapsed)}
            />
            <Dropdown overlay={menu}>
                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Dropdown>
        </Header>
    )
}

export default ContainerHeader