import express from 'express'
import { buscarAreasColetaAtivas } from '../use-cases/buscar-areas-coleta-ativas.use-case.js'
import { get } from './_base.route.js'

const areaColetaRouter = express.Router()

const createAreaColetaRoutes = (app) => {
  get({
    path: '/',
    router: areaColetaRouter,
    useCase: buscarAreasColetaAtivas,
  })

  app.use('/areas', areaColetaRouter)
}

export { createAreaColetaRoutes }
