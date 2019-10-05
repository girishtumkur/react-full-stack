import {connectDB} from './connect-db'

import {defaultState} from './defaultState';


export async function initializeDB()  {

    const db =  await connectDB();

    let users = await db.collection("users").findOne({id:'U1'});

    console.log('users',users);

    if (!users) {
        for (let collection in defaultState) {
            console.log(collection);
            console.log(defaultState[collection]);
            let collections = db.collection(collection);
            await collections.insertMany(defaultState[collection]);
        }
    }
    
}

initializeDB();

