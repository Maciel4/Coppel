import { modeloPromociones } from "../models/promociones.model.js";

const test = () => {
    console.log("Funciona la conexion a Promociones")
}
export default test

modeloPromociones.create({
    name: "Zapatos al 30% de descuento",
    tiempo: "24 dias"
})