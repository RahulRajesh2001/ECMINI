import express from 'express'
import dotenv from 'dotenv'
import { mongoConnect } from './config/db.js'
import bodyParser from 'body-parser';
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors());
//Mongodb Connect
mongoConnect()
//body-parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes imports
import userRoutes from './routes/userRoutes.js'


//Routes
app.use('/api/v1',userRoutes);


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})
