console.log('hello redux world');
import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './components/main';

import { store } from './store/index.js';

ReactDOM.render(<Main/>,document.getElementById("app"));

//console.log(store.getState());
