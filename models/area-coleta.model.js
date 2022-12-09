import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { pontoCentralSchema } from './schemas/ponto.schema.js'

const areaColetaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  criadaEm: {
    type: Date,
    required: true,
  },
  pontoCentral: {
    type: pontoCentralSchema,
    required: true,
  },
  raioAbrangencia: {
    type: Number,
    required: true,
  },
  status: String,
})

const AreaColetaModel = mongoose.model('AreaColeta', areaColetaSchema)

export { AreaColetaModel }
