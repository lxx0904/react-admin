import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from './utils/loadable'
// 初始化样式
import './style/reset.scss'
import './style/base.scss'
import 'animate.css'

const DefaultLayout = Loadable(() => import(/* webpackChunkName: 'default' */ './layout/DefaultLayout'))
const Login = Loadable(() => import(/* webpackChunkName: 'login' */ './views/Login/Login'))
const View404 = Loadable(() => import(/* webpackChunkName: '404' */ './views/Others/View404'))

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => ( <Redirect to="/index" /> )} />
                    <Route path="/login" component={Login} />
                    <Route path="/404" component={View404} />
                    <Route component={DefaultLayout} />
                </Switch>
            </Router>
        )
    }
}

export default App
