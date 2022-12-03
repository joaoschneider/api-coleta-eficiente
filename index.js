import express from 'express'
import { connectDb } from './db.js'
import { handleError } from './error-handler.js'
import { createUsuarioRoutes } from './routes/usuario.route.js'

const startApp = async (app) => {
  await connectDb()

  app.use(express.json())

  createUsuarioRoutes(app)

  app.use(handleError)

  app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
  })
}

const app = express()

startApp(app)
