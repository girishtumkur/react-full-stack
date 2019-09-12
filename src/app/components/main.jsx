import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {store} from '../store/index';
import {ConnectedDashboard} from './dashboard';


export const Main = () => (
    <Provider store={store} > 
       <ConnectedDashboard/>
    </Provider>
)
