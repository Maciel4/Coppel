import { modeloClientes } from "../models/clientes.model.js";

const test = () => {
    console.log("Funciona la conexion a Clientes")
}
export default test

modeloClientes.create({
    name: "Perdro Perez",
    credito: 300000
})