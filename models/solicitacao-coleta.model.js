import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { AreaColetaModel } from './area-coleta.model.js'
import { UsuarioModel } from './usuario.model.js'
import { pontoCentralSchema } from './schemas/ponto.schema.js'

const solicitacaoColetaSchema = new Schema({
  criadaEm: {
    type: Date,
    required: true,
  },
  pontoColeta: {
    type: pontoCentralSchema,
    required: true,
  },
  idArea: {
    type: Schema.Types.ObjectId,
    ref: AreaColetaModel,
  },
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: UsuarioModel,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const SolicitacaoColetaModel = mongoose.model(
  'SolicitacaoColeta',
  solicitacaoColetaSchema,
  'solicitacoes'
)

export { SolicitacaoColetaModel }
