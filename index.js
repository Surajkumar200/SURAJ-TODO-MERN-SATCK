import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path';


const __dirname = path.resolve();

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*', function (_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
        res.status(500).send(err);
    })
})


const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));