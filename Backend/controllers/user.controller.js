//para editar y borrar datos
import { Halo } from "../models/user.model.js";


export const test = (() => { //al parecer cuando es constante se usa un igual = para poder usar la funcion flecha.
    console.log("Sirvio?")
})

Halo.create({
    name: "John"
})