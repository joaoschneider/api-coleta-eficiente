import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

const cadastrarUsuario = async (req) => {
  console.log(req)
  //nao pode criar usuario com mesmo CPF (chave única)
  //por restrição da estratégia de autenticação utilizada, também o
  //email deve ser único.
  //nao pode criar usuario faltando um dos campos da lista acima
  //criar usuário no firebase auth
  //cadastrar usuário no mongo para controle de outros campos... email é a chave de conexão
  //entre firebaseauth e mongo

  const app = initializeApp({ credential: applicationDefault() })
  const authService = getAuth(app)

  const usuarioCriado = await authService.createUser({
    email: req.body.email,
    password: req.body.senha,
  })

  console.log(usuarioCriado)
}

export { cadastrarUsuario }
