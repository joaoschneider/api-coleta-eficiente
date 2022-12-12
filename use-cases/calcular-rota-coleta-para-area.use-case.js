import { RotaColetaModel } from '../models/rota-coleta.model.js'
import { SolicitacaoColetaModel } from '../models/solicitacao-coleta.model.js'

const calcularRotaDeColetaParaArea = async ({ area }) => {
  console.log('calculando rota...')
  const areaPossuiRotaNaoFinalizada = await RotaColetaModel.findOne()
    .where('status')
    .in(['GERADA', 'EM_EXECUCAO'])

  if (areaPossuiRotaNaoFinalizada) {
    throw 'Area possui rota ativa.'
  }

  console.log('area nao possui rota ativa...')

  const solicitacoesPendentesNaArea = await SolicitacaoColetaModel.find({
    idArea: area,
    status: 'PENDENTE',
  }).lean()

  if (!solicitacoesPendentesNaArea.length) {
    throw 'Area não possui solicitações pendentes.'
  }

  console.log(
    `area possui ${solicitacoesPendentesNaArea.length} solicitações pendentes...`
  )

  await SolicitacaoColetaModel.updateMany(
    {
      _id: {
        $in: solicitacoesPendentesNaArea.map((solicitacao) => solicitacao._id),
      },
    },
    {
      $set: {
        status: 'EM_ROTA',
      },
    }
  )

  console.log('solicitacoes atualizadas para EM_ROTA...')

  await RotaColetaModel.create({
    idArea: area,
    solicitacoes: solicitacoesPendentesNaArea.map(
      (solicitacao) => solicitacao._id
    ),
    status: 'EM_EXECUCAO',
  })

  console.log('rota criada com status EM_ROTA...')
  console.log(
    'retornando dados de longitude e latitude dos pontos envolvidos...'
  )

  return solicitacoesPendentesNaArea.map((solicitacaoPendente) => {
    return {
      longitude: solicitacaoPendente.pontoColeta.coordenadas[0],
      latitude: solicitacaoPendente.pontoColeta.coordenadas[1],
    }
  })
}

export { calcularRotaDeColetaParaArea }
