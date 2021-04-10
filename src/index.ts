import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Database import
import './lib/db'

// Import routes
import healthRoutes from './lib/routes/health'
import userRoutes from './lib/routes/user'

app.use('/health', healthRoutes)
app.use('/users', userRoutes)

// Start server
const port = 5000 || process.env.PORT
app.listen(port, () => console.log(`Running on port ${port}`))
