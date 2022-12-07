import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const pontoCentralSchema = new Schema(
  {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordenadas: {
      type: [Number],
      required: true,
    },
  },
  { _id: false }
)

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
