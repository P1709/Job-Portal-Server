import express from 'express'
import dotenv from 'dotenv'
// import mongoose from 'mongoose';
import connectDB from './database/conn.js';
import route from './route/authRoute.js';
import jobRoute from './route/jobRoute.js'

import cors from 'cors'
import errorMiddleware from './middleware/errorMiddleware.js';
const app = express()

dotenv.config()

// Middleware
app.use(express.json())
app.use(cors())
app.use("/api",route)
app.use("/api",jobRoute)

app.use(errorMiddleware)
// MongoDB Connection
connectDB()

// Port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Port is Running on ${PORT}`)
})