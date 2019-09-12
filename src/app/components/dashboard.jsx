import React from 'react';
import {connect} from 'react-redux';

import {ConnectedTaskList} from './TaskList';

const  Dashboard = ({groups}) => (
    <div>
        <h2> dashboard </h2>
        {
            groups.map(group => (
                <React.Fragment><h2>{group.name}</h2>
                <ConnectedTaskList id={group.id} name={group.name} />
                </React.Fragment>
                
            ))   
        }  
    </div>
);

function mapStateToProps (state) {
    return { groups : state.groups } ;
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);