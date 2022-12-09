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

export { pontoCentralSchema }
