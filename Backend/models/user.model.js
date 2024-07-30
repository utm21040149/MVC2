//para guardar datos
import {Schema, model} from 'mongoose' //cuando es una funcion se ponen llaves

const esquema_Halo = new mongoose.Schema({
    Halo_Entregas:{
        type:String,
        required: true
    },

})

export const Halo = new model('Eventos', esquema_Halo);