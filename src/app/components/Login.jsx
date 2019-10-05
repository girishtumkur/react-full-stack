import React from 'react';

import {connect} from 'react-redux';
import * as mutations from '../store/mutations';

const LoginComponent = ({authenticateUser,authenticated}) => {
    return <div> <h2>Login here</h2> 
    <form onSubmit={authenticateUser}>
    <input type="text" name="username" placeholder="name" defaultValue="Dev" />
    <input type="text" name="password" placeholder="password" defaultValue="" />
    {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p> : null}
    <button type="submit">Login</button> 
    </form>
    </div>
}

const mapStateToProps = ({session}) => ({authenticated:session.authenticated});

const mapDispatchToProps = (dispatch) =>( {
    authenticateUser(e) {
        e.preventDefault();
        const username = e.target['username'].value;
        const password = e.target['password'].value;
       // console.log('matchdispatchpros',username,password);
        dispatch(mutations.requestAuthenticateUser(username,password));
    }
})

export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(LoginComponent);