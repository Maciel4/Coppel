import { Schema, model } from "mongoose";

export const esquema2 = new Schema({
    name:{ type:String},
    age:{ type: Number}
})

export const modeloGerentes = new model('Gerentes', esquema2)
