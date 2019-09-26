import {MongoClient} from 'mongodb';

const url ='mongodb://localhost:27017/myorganizer';

let db = null;

export async function connectDB() {

    //console.log('incide connectDB');

    if (db!= null)
        return db;

    let client = await MongoClient.connect(url,{useNewUrlParser:true});

    db =   client.db();
   // console.info('db connected',db);
    return db;

}


