import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

// Importacion de routas
import { authRouter } from './routes/auth.routes.js'
import { eventsRouter } from './routes/events.routes.js'
import { dbConnection } from './database/config.js'

// Crear el servidor de express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Público
app.use(express.static('views'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/todo',todoRouter)

// Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor ejecutandoce en el puerto ${process.env.PORT}`)
})