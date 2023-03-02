import { getConnection, sql } from "../dataBase/conection";

export const getUsuarios = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query("SELECT * FROM usuarios")
    console.log(result)
    res.json(result.recordset)
}

export const createUsuarios = async (req, res) => {

    const { nombre, apellido1, apellido2, correo, contraseña, tel } = req.body

    let {permisos} = req.body

    if (nombre == null || apellido1 == null || apellido2 == null || correo == null || contraseña == null || tel == null) { 
        return res.status(400).json({ msg: "Solicitud erronea. Porfavor llena los campos requeridos" }) 
}

    if(permisos == null)
        permisos = "usuario"
    

    const pool = await getConnection()
    await pool.request()
    .input("nombre", sql.VarChar, nombre).input("apellido1", sql.VarChar, apellido1)
    .input("apellido2", sql.VarChar, apellido2)
    .input("correo", sql.VarChar, correo)
    .input("contraseña", sql.VarChar, contraseña)
    .input("permisos", sql.VarChar, permisos)
    .input("tel", sql.BigInt, tel)
    .query("INSERT INTO usuarios (nombre, apellido1, apellido2, correo, contraseña, permisos, tel) VALUES (@nombre, @apellido1, @apellido2, @correo, @contraseña, @permisos, @tel)")

    console.log("Usuario creado correctamente")

}