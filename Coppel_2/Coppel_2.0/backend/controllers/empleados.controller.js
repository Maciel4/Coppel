import { modeloEmpleados } from "../models/empleados.model.js";

const test = () => {
    console.log("Funciona la conexion a empleados")
}
export default test

modeloEmpleados.create({
    name: "Juan Alvarez",
    age: 34
})