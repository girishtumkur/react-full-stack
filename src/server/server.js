import express from 'express'

import cors from 'cors'
import  bodyParser from 'body-parser'

import  {connectDB} from './connect-db';

let app = express();

app.listen(9000, console.log('server listerning'));
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

 export const addNewTask = async (task) => {
    const db = await connectDB();
    let collection =  db.collection('tasks');
    await collection.insertOne(task);
}


export const updateTask = async (task) => {
    const db = await connectDB();
    const {id, name, group, isComplete} = task;
    let collection =  db.collection('tasks');

    if (name)
        await collection.updateOne({id},{$set: {name :  name}});
  
    if (group)
        await collection.updateOne({id},{$set: {group:group}});

    if (isComplete != undefined)
        await collection.updateOne({id},{$set: {isComplete:isComplete}});    
      
}

app.post('/task/new',async  (req,res)=> {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();
});


app.post('/task/update',async  (req,res)=> {
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send();
});

app.get('/', (req,res)=> {
    console.log('SERVER REQUEST','\n',req);
    res.send('hello world');
}
);
