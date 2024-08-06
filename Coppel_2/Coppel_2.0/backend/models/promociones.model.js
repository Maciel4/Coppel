import { Schema, model } from "mongoose";

export const esquema4 = new Schema({
    name:{ type:String},
    tiempo:{ type: String}
})

export const modeloPromociones = new model('Promociones', esquema4)
