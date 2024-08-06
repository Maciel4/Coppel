import { Schema, model } from "mongoose";

export const esquema3 = new Schema({
    name:{ type:String},
    total:{ type: Number}
})

export const modeloProductos = new model('Productos', esquema3)
