import { modeloGerentes } from "../models/gerentes.model.js";

const test = () => {
    console.log("Funciona la conexion a Gerentes")
}
export default test

modeloGerentes.create({
    name: "Juanito Alcachofa",
    age: 22
})