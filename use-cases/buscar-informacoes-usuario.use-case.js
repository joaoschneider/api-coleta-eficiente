import { UsuarioModel } from '../models/usuario.model.js'

const buscarInformacoesUsuario = async ({ uid }) => {
  return await UsuarioModel.findOne({ firebaseId: uid })
}

export { buscarInformacoesUsuario }
