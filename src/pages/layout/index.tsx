import React, { Suspense,useState, lazy } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style.css'

const Home = lazy(()=> import('../home')) 
const Employee = lazy(()=> import('../employee'))
const { Header, Sider, Content } = Layout

const LayoutComponent:React.FC = ()=>{
    const [collapsed, setcollapsed] = useState(true)
    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" className="menu-item">
                        <Icon type="employee" />
                        <Link to='/employee'>员工</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
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
                   <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route  path='/employee' component={Employee}/>
                        </Switch>
                    </Suspense>
                    </Router> 
                </Content>
            </Layout>
      </Layout>
    )
}

export default LayoutComponent
