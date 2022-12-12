import { RotaColetaModel } from '../models/rota-coleta.model.js'
import { SolicitacaoColetaModel } from '../models/solicitacao-coleta.model.js'

const finalizarRotaDeColeta = async ({ id }) => {
  console.log(id)
  const rotaColeta = await RotaColetaModel.findById(id).lean()

  if (!rotaColeta || rotaColeta.status !== 'EM_EXECUCAO') {
    throw 'Não é possível finalizar esta rota.'
  }

  await SolicitacaoColetaModel.updateMany(
    { _id: { $in: rotaColeta.solicitacoes } },
    { $set: { status: 'ATENDIDA' } }
  )

  await RotaColetaModel.updateOne(
    { _id: rotaColeta._id },
    { $set: { status: 'FINALIZADA' } }
  )
}

export { finalizarRotaDeColeta }
