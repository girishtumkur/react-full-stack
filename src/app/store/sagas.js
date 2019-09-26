import {take,put,select} from 'redux-saga/effects';

import * as mutations from './mutations';

import uuid from 'uuid';

import axios from 'axios';
const url = "http://localhost:9000";

export function* taskCreationSaga() {
while (true) {
    const action= yield take(mutations.REQUEST_TASK_CREATION);
    console.log('action:::::::::::::::::::::::::::::::::::::',action);
    const ownerID = "U1";
    const taskID = uuid();
    const groupID =action.groupID;
    yield put(mutations.createTask(taskID,groupID,ownerID));

    axios.post(url+"/task/new",{
        task:{
            id:taskID,
            group:groupID,
            owner:ownerID,
            isComplete:false,
            name:"NEW TASK"
        }
        }).then(function (response) {
        console.log("GOT response..........", response);
      })
}
}

  

export function* taskModificationSaga() {
    while (true) {
        const task = yield take([mutations.SET_TASK_COMPLETE, mutations.SET_TASK_GROUP, mutations.SET_TASK_NAME]);
        console.log("incide taskModification Saga", task);
        axios.post(url+"/task/update",{
            task:{
                id:task.taskID,
                group:task.groupID,
                isComplete:task.isComplete,
                name:task.name
            }
            }).then(function (response) {
            console.log("GOT response..........", response);
          })
    }
    }