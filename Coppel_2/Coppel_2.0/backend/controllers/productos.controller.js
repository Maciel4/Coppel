import { modeloProductos } from "../models/productos.model.js";

const test = () => {
    console.log("Funciona la conexion a Productos")
}
export default test

modeloProductos.create({
    name: "Tennis",
    total: 900000
})