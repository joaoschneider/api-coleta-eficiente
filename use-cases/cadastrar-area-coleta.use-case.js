import { AreaColetaModel } from '../models/area-coleta.model.js'
import { UsuarioModel } from '../models/usuario.model.js'

const cadastrarAreaColeta = async ({ nome, raioEmMetros, centro, uid }) => {
  const user = await UsuarioModel.findOne({ firebaseId: uid })

  if (user.tipo === 'CIDADAO') {
    console.log('Sem permissão!')
    throw 'Sem permissão.'
  }

  return await AreaColetaModel.create({
    nome,
    pontoCentral: {
      type: 'Point',
      coordenadas: [centro.longitude, centro.latitude],
    },
    criadaEm: new Date(),
    raioAbrangencia: raioEmMetros,
    status: 'ATIVA',
  })
}

export { cadastrarAreaColeta }
