import express from 'express'
import { get, post } from './_base.route.js'
import { validateToken } from '../middlewares/validate-token.middleware.js'
import { buscarInformacoesUsuario } from '../use-cases/buscar-informacoes-usuario.use-case.js'
import { cadastrarAreaColeta } from '../use-cases/cadastrar-area-coleta.use-case.js'
import { cadastrarSolicitacaoColeta } from '../use-cases/cadastrar-solicitacao-coleta.use-case.js'

const privateRouter = express.Router()

const createPrivateRoutes = (app) => {
  get({
    path: '/me',
    router: privateRouter,
    useCase: buscarInformacoesUsuario,
  })
  post({
    path: '/areas',
    router: privateRouter,
    useCase: cadastrarAreaColeta,
  })
  post({
    path: '/solicitacoes',
    router: privateRouter,
    useCase: cadastrarSolicitacaoColeta,
  })

  app.use('/private', validateToken, privateRouter)
}

export { createPrivateRoutes }
