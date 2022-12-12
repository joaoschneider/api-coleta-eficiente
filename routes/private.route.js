import express from 'express'
import { get, post } from './_base.route.js'
import { validateToken } from '../middlewares/validate-token.middleware.js'
import { buscarInformacoesUsuario } from '../use-cases/buscar-informacoes-usuario.use-case.js'
import { cadastrarAreaColeta } from '../use-cases/cadastrar-area-coleta.use-case.js'
import { cadastrarSolicitacaoColeta } from '../use-cases/cadastrar-solicitacao-coleta.use-case.js'
import { buscarSolicitacoesColetaDoUsuario } from '../use-cases/buscar-solicitacoes-coleta-usuario.use-case.js'
import { calcularRotaDeColetaParaArea } from '../use-cases/calcular-rota-coleta-para-area.use-case.js'
import { finalizarRotaDeColeta } from '../use-cases/finalizar-rota-coleta.use-case.js'
import { buscarRotasAtivas } from '../use-cases/buscar-rotas-ativas.use-case.js'

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
  get({
    path: '/solicitacoes',
    router: privateRouter,
    useCase: buscarSolicitacoesColetaDoUsuario,
  })
  post({
    path: '/rotas',
    router: privateRouter,
    useCase: calcularRotaDeColetaParaArea,
  })
  get({
    path: '/rotas',
    router: privateRouter,
    useCase: buscarRotasAtivas,
  })
  post({
    path: '/rotas/:id/finalizar',
    router: privateRouter,
    useCase: finalizarRotaDeColeta,
  })

  app.use('/private', validateToken, privateRouter)
}

export { createPrivateRoutes }
