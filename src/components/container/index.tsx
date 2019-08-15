import React, { useState, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { withRouter, Route, Switch, RouteComponentProps, Redirect  } from 'react-router-dom'

import ContainerHeader from './container-header'
import ContainerSider from './container-sider'
import { CollapsedContext } from './context'
import { StoreState as MenuStore } from 'store/menu-model/types'
import {AsyncRouter} from 'router'

import './style.scss'

const Home = lazy(()=> import('pages/home'))
const { Content } = Layout

interface IProps {
    value: {
        menus: MenuStore['menus']
    }
}

const Container:React.FC<RouteComponentProps&IProps> = ({value,match,history,location})=>{
    const { menus } = value
    const [collapsed, setcollapsed] = useState(true)
    return(
        <Layout>
            <CollapsedContext.Provider value={collapsed}>
                <ContainerSider match={match} history={history} location={location} menus={menus} />
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
                            {
                                menus.map((item,index)=>{
                                    return (
                                        <Route key={index} path={`${item.path}`} component={AsyncRouter[item.code]} />
                                    )
                                })
                            }
                            <Redirect to='/404' />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
      </Layout>
    )
}

interface StoreState {
    menus:MenuStore['menus']
}
const mapStateToProps = (state: StoreState): { value:StoreState } => ({
    value: state
})

export default connect(mapStateToProps)(withRouter(Container)) 
