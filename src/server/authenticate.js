import md5 from 'md5';
import { connectdb, connectDB } from './connect-db';

import uuid from 'uuid';

export const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB();

    let tasks = await db.collection('tasks').find({ owner: user.id }).toArray();
    let groups = await db.collection('groups').find({ owner: user.id }).toArray();

    return {
        tasks,
        groups,
        session: { authenticated: 'AUTHENTICATED', id: user.id }
    }
}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let { username, password } = req.body;
        let db = await connectDB();
        let collection = db.collection('users');
        let user = await collection.findOne({ name: username });

        if (!user) {
            return res.status(500).send('user not found');
        }

        let hashedPassword = md5(password);

        let passwordCorrect = hashedPassword === user.passwordHash;

        if (!passwordCorrect)
            return res.status(500).send('password is incorrect..');

        let token = uuid();
        authenticationTokens.push({ token, usedID: user.id });


        let state = await assembleUserState(user);
        res.send({ state, token })

    })
}