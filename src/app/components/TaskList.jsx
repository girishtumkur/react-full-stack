import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';

import {Link} from 'react-router-dom';

export const TaskList = ({ tasks, name, id, createNewTask }) => (
    <div>
        <h2>{name}</h2>
        {tasks.map(task => (
            <Link to={`/task/${task.id}`}  key={task.id}>
               <div key={task.id} > {task.name} </div>
            </Link>
        ))}
        <button onClick={() => createNewTask(id)}> Add new Task </button>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId) 
    };

}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        createNewTask(id) {
            console.log("creating new task. Group Id:" + id);
            dispatch(requestTaskCreation(id));
        }
    };

}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);