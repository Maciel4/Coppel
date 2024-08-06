import { Schema, model } from "mongoose";

export const esquema = new Schema({
    name:{ type:String},
    credito:{ type: Number}
})

export const modeloClientes = new model('Clientes', esquema)
