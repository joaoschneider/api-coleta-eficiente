import { RotaColetaModel } from '../models/rota-coleta.model.js'

const buscarRotasAtivas = async () => {
  const rotas = await RotaColetaModel.find({ status: 'EM_EXECUCAO' })
    .populate('idArea')
    .lean()

  return rotas.map((rota) => {
    return {
      id: rota._id,
      nomeArea: rota.idArea.nome,
    }
  })
}

export { buscarRotasAtivas }
