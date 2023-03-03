import { getConnection, querys, sql } from "../database";

export const getUsuarios = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(querys.getAllUsuarios)
    console.log(result)
    res.json(result.recordset)
}

export const createUsuarios = async (req, res) => {

    const { nombre, apellido1, apellido2, correo, contraseña, tel } = req.body

    let { permisos } = req.body

    if (nombre == null || apellido1 == null || apellido2 == null || correo == null || contraseña == null || tel == null) {
        return res.status(400).json({ msg: "Solicitud erronea. Porfavor llena los campos requeridos" })
    }

    if (permisos == null)
        permisos = "usuario"


    const pool = await getConnection()
    await pool.request()
        .input("nombre", sql.VarChar, nombre)
        .input("apellido1", sql.VarChar, apellido1)
        .input("apellido2", sql.VarChar, apellido2)
        .input("correo", sql.VarChar, correo)
        .input("contraseña", sql.VarChar, contraseña)
        .input("permisos", sql.VarChar, permisos)
        .input("tel", sql.BigInt, tel)
        .query(querys.addNewUsuario)

        const result = await pool.request().query(querys.getAllUsuarios)
        console.log(result)
        res.json(result.recordset)

    console.log("Usuario creado correctamente")

}

export const getUsuarioById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_usuario", req.params.id)
            .query(querys.getUsuarioById);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteUsuarioById = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_usuario", req.params.id)
            .query(querys.deleteUsuario);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        return res.sendStatus(204, "Usuario eliminado correctamente");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalUsuarios = async (req, res) => {
    const pool = await getConnection();

    const result = await pool.request().query(querys.getTotalUsuarios);
    console.log(result);
    res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
    const { nombre, apellido1, apellido2, correo, contraseña, permisos, tel  } = req.body

    // validating
    if (nombre == null || apellido1 == null || apellido2 == null || correo == null || contraseña == null || permisos == null || tel == null) {
        return res.status(400).json({ msg: "Solicitud erronea. Porfavor llena los campos requeridos" })
    } 
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("nombre", sql.VarChar, nombre)
            .input("apellido1", sql.VarChar, apellido1)
            .input("apellido2", sql.VarChar, apellido2)
            .input("correo", sql.VarChar, correo)
            .input("contraseña", sql.VarChar, contraseña)
            .input("permisos", sql.VarChar, permisos)
            .input("tel", sql.BigInt, tel)
            .input("id_usuario", req.params.id)
            .query(querys.updateUsuarioById);
        res.json({ nombre, apellido1, apellido2, correo, contraseña, permisos, tel });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

