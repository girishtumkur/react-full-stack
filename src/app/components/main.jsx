import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../store/index';
import  {ConnectedDashboard}  from './Dashboard';

import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';

import {ConnectedTaskDetail} from './taskDetail';


export const Main = () => (
    <Router history={history} >
        <Provider store={store} >
            <div>
                <ConnectedNavigation />
                <Route exact path="/dashboard" render={() => (<ConnectedDashboard />)} />

                <Route exact path="/task/:id" render={({match}) => (<ConnectedTaskDetail  match={match} />)} />
            </div>
        </Provider>
    </Router>
)
