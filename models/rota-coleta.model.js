import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { AreaColetaModel } from './area-coleta.model.js'
import { SolicitacaoColetaModel } from './solicitacao-coleta.model.js'

const rotaColetaSchema = new Schema({
  criadaEm: Date,
  idArea: {
    type: Schema.Types.ObjectId,
    ref: AreaColetaModel,
  },
  solicitacoes: {
    type: [Schema.Types.ObjectId],
    ref: SolicitacaoColetaModel,
  },
  status: String,
})

const RotaColetaModel = mongoose.model('RotaColeta', rotaColetaSchema, 'rotas')

export { RotaColetaModel }
