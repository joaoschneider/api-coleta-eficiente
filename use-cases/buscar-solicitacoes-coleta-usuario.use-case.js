import { SolicitacaoColetaModel } from '../models/solicitacao-coleta.model.js'
import { UsuarioModel } from '../models/usuario.model.js'

const buscarSolicitacoesColetaDoUsuario = async ({ uid }) => {
  const usuario = await UsuarioModel.findOne({ firebaseId: uid })
  const solicitacoes = await SolicitacaoColetaModel.find({
    idUsuario: usuario.id,
  }).sort({ criadaEm: 'desc' })

  return solicitacoes.map((solicitacao) => {
    return {
      dataCriacao: solicitacao.criadaEm.toLocaleString('pt-BR', {
        dateStyle: 'short',
      }),
      status: solicitacao.status,
    }
  })
}

export { buscarSolicitacoesColetaDoUsuario }
