import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  firebaseId: {
    type: String,
    required: true,
  },
})

const UsuarioModel = mongoose.model('Usuario', usuarioSchema)

export { UsuarioModel }
