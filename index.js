import express from 'express'
import { cadastrarUsuario } from './use-cases/cadastrar-usuario.use-case.js'

const app = express()

app.use(express.json())

app.post('/usuario', cadastrarUsuario)

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})
