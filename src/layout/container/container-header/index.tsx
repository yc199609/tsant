import React, { useContext } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Icon, Avatar, Menu, Dropdown } from 'antd'
import { CollapsedContext } from '../context'

const { Header } = Layout

const HeaderMenu:React.SFC<RouteComponentProps> = (props) => (
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
    <Menu.Item onClick={()=>{
      props.history.push('/login')
    }}>
      退出登录
    </Menu.Item>
  </Menu>
)

interface Iprops {
  setcollapsed:(arg:boolean) =>void
}

const ContainerHeader:React.SFC<Iprops&RouteComponentProps> = (props)=>{
    const collapsed = useContext(CollapsedContext)
    return(
        <Header className="header">
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={()=>props.setcollapsed(!collapsed)}
            />
            <Dropdown overlay={
              <HeaderMenu history={props.history} location={props.location} match={props.match} />
            }>
                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Dropdown>
        </Header>
    )
}

export default withRouter(ContainerHeader)