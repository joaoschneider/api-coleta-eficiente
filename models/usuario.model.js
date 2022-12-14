import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { TIPO_USUARIO } from '../constants/tipo-usuario.constant.js'
import { AreaColetaModel } from './area-coleta.model.js'

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  firebaseId: {
    type: String,
  },
  tipo: {
    type: String,
    enum: Object.values(TIPO_USUARIO),
    required: true,
  },
  idArea: {
    type: Schema.Types.ObjectId,
    ref: AreaColetaModel,
    required: true,
  },
})

const UsuarioModel = mongoose.model('Usuario', usuarioSchema)

export { UsuarioModel }
