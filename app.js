import mongoose from 'mongoose'
import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
import {test} from './Backend/controllers/user.controller.js'
dotenv.config();


mongoose.connect(process.env.url_bd)
.then(()=>{
    console.log('Se conecto chido')
})
.catch((err)=>{
    console.log('No se pudo alv')
})


const app=express()
app.use(cors())

app.listen(4004, ()=> {
    Console.log("Esta funcionando correctamente el servidor local")
}
)

test()