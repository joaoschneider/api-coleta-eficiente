import { getFirebaseAuth } from '../firebase-auth.js'
import { UsuarioModel } from '../models/usuario.model.js'

const cadastrarUsuario = async ({ email, senha, cpf, nome }) => {
  //nao pode criar usuario com mesmo CPF (chave única)
  //por restrição da estratégia de autenticação utilizada, também o
  //email deve ser único.
  //nao pode criar usuario faltando um dos campos da lista acima
  //criar usuário no firebase auth
  //cadastrar usuário no mongo para controle de outros campos... email é a chave de conexão
  //entre firebaseauth e mongo

  const usuarioCriado = await getFirebaseAuth().createUser({
    email,
    password: senha,
  })

  await UsuarioModel.create({
    nome,
    cpf,
    firebaseId: usuarioCriado.uid,
  })
}

export { cadastrarUsuario }
