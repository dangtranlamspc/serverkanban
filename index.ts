import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from './src/routers/user';

dotenv.config();

const PORT = process.env.FORT || 3001;

const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.lmnpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/auth', userRouter);

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log(`Connect to db success`)
    } catch (error) {
        console.log(`Can not connect to db ${error}`)
    }
};

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is starting at http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})