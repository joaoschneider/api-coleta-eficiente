import { AreaColetaModel } from '../models/area-coleta.model.js'

const buscarAreasColetaAtivas = async () => {
  const areasAtivas = await AreaColetaModel.find({ status: 'ATIVA' })

  return areasAtivas.map((areaAtiva) => {
    return {
      id: areaAtiva.id,
      nome: areaAtiva.nome,
    }
  })
}

export { buscarAreasColetaAtivas }
