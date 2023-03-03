export const querys = {
    getAllUsuarios: "SELECT * FROM [ejemplo].[dbo].[usuarios]",
    getUsuarioById: "SELECT * FROM [ejemplo].[dbo].[usuarios] WHERE id_usuario = @id_usuario",
    addNewUsuario:
      "INSERT INTO [ejemplo].[dbo].[usuarios] (nombre, apellido1, apellido2, correo, contraseña, permisos, tel) VALUES (@nombre, @apellido1, @apellido2, @correo, @contraseña, @permisos, @tel)",
    deleteUsuario: "DELETE FROM [ejemplo].[dbo].[usuarios] WHERE id_usuario = @id_usuario",
    getTotalUsuarios: "SELECT COUNT(*) FROM ejemplo.dbo.usuarios",
    updateUsuarioById:
      "UPDATE [ejemplo].[dbo].[usuarios] SET nombre = @nombre, apellido1 = @apellido1, apellido2 = @apellido2, correo = @correo,  contraseña = @contraseña, permisos = @permisos,  tel = @tel WHERE id_usuario = @id_usuario",
  };