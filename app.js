//imoprt all libraries 
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {config} from 'dotenv'
import indexRoutes from './routes/index.js'

const app = express()
config()


//setup connections 
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Connect DB "))
.catch(()=>console.log("Error Connect DB "))


//setup middlewares
app.use(cors()) // CORS => cross origin resource sharing // share frontend <-> backend
app.use(express.json())

//setup routes
app.use(indexRoutes)

//start listening on server  
const port = process.env.PORT
app.listen(port, ()=> console.log("Server running on port ", port))
