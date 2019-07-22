import React, { useState, lazy, Suspense } from 'react'
import './style.scss'
import { withRouter, Route, Switch, RouteComponentProps, Redirect  } from 'react-router-dom'

import ContainerHeader from './container-header'
import ContainerSider from './container-sider'
import { CollapsedContext } from './context'
import { Layout } from 'antd'

const Home = lazy(()=> import('../../pages/home')) 
const Employee = lazy(()=> import('../../pages/employee'))
const { Content } = Layout

const Container:React.FC<RouteComponentProps> = ({match,history,location})=>{
    const [collapsed, setcollapsed] = useState(true)
    return(
        <Layout>
            <CollapsedContext.Provider value={collapsed}>
                <ContainerSider match={match} history={history} location={location} />
            </CollapsedContext.Provider>
            <Layout>
                <CollapsedContext.Provider value={collapsed}>
                    <ContainerHeader setcollapsed={setcollapsed} />
                </CollapsedContext.Provider>
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
                            <Redirect to='/404' />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
      </Layout>
    )
}

export default withRouter(Container) 
