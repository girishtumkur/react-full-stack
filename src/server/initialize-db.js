import {connectDB} from './connect-db'

import {defaultState} from './defaultState';


export async function initializeDB()  {

    const db =  await connectDB();
    for (let collection in defaultState) {
        console.log(collection);
        console.log(defaultState[collection]);
        let collections = db.collection(collection);
        await collections.insertMany(defaultState[collection]);
    }
    
}

initializeDB();

