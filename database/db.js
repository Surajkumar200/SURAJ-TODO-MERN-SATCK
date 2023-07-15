import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {

    const MONGODB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-hgahjoz-shard-00-00.kg2oup5.mongodb.net:27017,ac-hgahjoz-shard-00-01.kg2oup5.mongodb.net:27017,ac-hgahjoz-shard-00-02.kg2oup5.mongodb.net:27017/?ssl=true&replicaSet=atlas-8hwind-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;