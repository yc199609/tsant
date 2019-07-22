import React, { useState, lazy, Suspense } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, Route, Switch, RouteComponentProps, Redirect  } from 'react-router-dom'
import './style.css'

const Home = lazy(()=> import('../../pages/home')) 
const Employee = lazy(()=> import('../../pages/employee'))

const { Header, Sider, Content } = Layout

const Container:React.FC<RouteComponentProps> = ({match,history})=>{
    const [collapsed, setcollapsed] = useState(true)
    return(
        <Layout>
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
                    <Menu.Item key="home">
                        <Icon type="home" />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="employee" className="menu-item">
                        <Icon type="user" />
                        <span>员工</span >
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={()=>setcollapsed(!collapsed)}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 'calc(100vh - 112px)',
                    }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path={`${match.url}/home`} component={Home} />
                            <Redirect from={`${match.url}`} exact to={`${match.url}/home`} />
                            <Route path={`${match.url}/employee`} component={Employee} />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
      </Layout>
    )
}

export default withRouter(Container) 
