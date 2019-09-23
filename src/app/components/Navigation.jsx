
/**
 * The navigation component is present on all non-login pages,
 * and contains a link back to the dashboard, and the user's name.
 */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
/*
function Navigation() {
    return (   <Link to="/dashboard">
            <h1>
                My Application
            </h1>
        </Link>);
}
*/

const Navigation = () => (

    <Link to="/dashboard">
        <h1>
            My App
            </h1>
    </Link>

);


//const mapStateToProps = (state)=>(state);

export const ConnectedNavigation = connect(state => state)(Navigation);
