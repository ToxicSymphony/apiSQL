import {config} from "dotenv"

//se usa config del modulo dotenv para saber las variables de entorno
config()


export default{
    port: process.env.PORT || 8000,
}