import express from 'express'
import { get } from './_base.route.js'
import { validateToken } from '../middlewares/validate-token.middleware.js'
import { buscarInformacoesUsuario } from '../use-cases/buscar-informacoes-usuario.use-case.js'

const privateRouter = express.Router()

const createPrivateRoutes = (app) => {
  get({
    path: '/me',
    router: privateRouter,
    useCase: buscarInformacoesUsuario,
  })
  app.use('/private', validateToken, privateRouter)
}

export { createPrivateRoutes }
