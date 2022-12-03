import { TIPO_USUARIO } from '../constants/tipo-usuario.constant.js'
import { getFirebaseAuth } from '../firebase-auth.js'
import { UsuarioModel } from '../models/usuario.model.js'

const cadastrarUsuario = async ({ email, senha, cpf, nome }) => {
  const usuarioCriado = await UsuarioModel.create({
    nome,
    cpf,
    email,
    tipo: TIPO_USUARIO.CIDADAO,
  })

  const usuarioFirebase = await getFirebaseAuth().createUser({
    email,
    password: senha,
  })

  await UsuarioModel.updateOne(
    { _id: usuarioCriado.id },
    { firebaseId: usuarioFirebase.uid }
  )
}

export { cadastrarUsuario }
