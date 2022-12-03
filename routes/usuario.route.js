import express from 'express'
import { cadastrarUsuario } from '../use-cases/cadastrar-usuario.use-case.js'
import { post } from './_base.route.js'

const usuarioRouter = express.Router()

const createUsuarioRoutes = (app) => {
  post({
    router: usuarioRouter,
    path: '/',
    useCase: cadastrarUsuario,
  })

  app.use('/usuarios', usuarioRouter)
}

export { createUsuarioRoutes }
