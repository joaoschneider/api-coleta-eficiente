import circleToPolygon from 'circle-to-polygon'
import robustPointInPolygon from 'robust-point-in-polygon'
import { AreaColetaModel } from '../models/area-coleta.model.js'
import { SolicitacaoColetaModel } from '../models/solicitacao-coleta.model.js'
import { UsuarioModel } from '../models/usuario.model.js'

const cadastrarSolicitacaoColeta = async ({ uid, pontoColeta }) => {
  const usuario = await UsuarioModel.findOne({ firebaseId: uid })
  const usuarioPossuiSolicitacaoPendente = await SolicitacaoColetaModel.findOne(
    {
      idUsuario: usuario.id,
      status: 'PENDENTE',
    }
  )

  if (usuarioPossuiSolicitacaoPendente) {
    throw 'Possui solicitação pendente já cadastrada.'
  }

  const areaColeta = await AreaColetaModel.findById(usuario.idArea)

  if (!areaColeta.status === 'ATIVA') {
    throw 'Área de coleta inativa.'
  }

  //validar se ponto está dentro da área
  const { coordinates } = circleToPolygon(
    [
      areaColeta.pontoCentral.coordenadas[0],
      areaColeta.pontoCentral.coordenadas[1],
    ],
    areaColeta.raioAbrangencia
  )

  if (
    robustPointInPolygon(coordinates[0], [
      pontoColeta.longitude,
      pontoColeta.latitude,
    ]) !== -1
  ) {
    throw 'Ponto de coleta fora da área de coleta do usuário.'
  }

  await SolicitacaoColetaModel.create({
    criadaEm: new Date(),
    idUsuario: usuario.id,
    status: 'PENDENTE',
    idArea: areaColeta.id,
    pontoColeta: {
      type: 'Point',
      coordenadas: [pontoColeta.longitude, pontoColeta.latitude],
    },
  })
}

export { cadastrarSolicitacaoColeta }
