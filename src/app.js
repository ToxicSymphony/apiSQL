import express from "express"
import config from "./config"
import usuariosRoutes from "./routes/usuarios.routes"

//se guarda express en una constante
const app = express()

//se configura el puerto 
app.set("port", config.port)

//middlewares

//este habilita al servidor para resivir datos en formato json
app.use(express.json())

//este habilita al servidor para resivir datos de formularios html
app.use(express.urlencoded({extended:false}))


app.use(usuariosRoutes)

export default app