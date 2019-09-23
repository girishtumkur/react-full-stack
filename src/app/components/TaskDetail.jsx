
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const TaskDetail = ({ id,
    task,
    groups,
    isComplete, setTaskCompletion, setTaskName, setTaskGroup }) => (
        <div>
            <h3>Task Details</h3>
            <div>
                <input type="text" onChange={setTaskName} value={task.name}></input>
            </div>
            <div>
                <button onClick={()=>setTaskCompletion(id,!isComplete)} > {isComplete ? 'ReOpen' : 'Complete'}</button>
            </div>
            <div>
                <select onChange={setTaskGroup} value={task.group}>
                    {
                        groups.map(group => (<option key={group.id} value={group.id}>{group.name}</option>))
                    }
                </select>
            </div>
            <div>
                <Link to="/dashboard">
                    <button>Done</button>
                </Link>
            </div>
        </div>
    );


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return ({
        id,
        task,
        groups,
        isComplete: task.isComplete,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        setTaskCompletion(id, isComplete) {
            console.log(isComplete);
            dispatch(mutations.setTaskCompletion(id, isComplete));
        },
        setTaskName(e) {
           dispatch(mutations.setTaskName(id, e.target.value));
        },
        setTaskGroup(e) {
           dispatch(mutations.setTaskGroup(id, e.target.value));
        }
    }
}

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail); 
