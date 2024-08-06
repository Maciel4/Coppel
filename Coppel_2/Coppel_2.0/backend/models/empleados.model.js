import { Schema, model } from "mongoose";

export const esquema1 = new Schema({
    name:{ type:String},
    age:{ type: Number}
})

export const modeloEmpleados = new model('Empleado', esquema1)
