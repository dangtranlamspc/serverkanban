import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.FORT || 3001;

const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.lmnpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express()

app.listen(PORT, () => {
    console.log(`Server is starting at http://localhost:${PORT}`)
})