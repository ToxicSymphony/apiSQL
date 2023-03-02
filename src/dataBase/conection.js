import sql from "mssql"

//se colocan los tokens para conectar la base de datos
const dbSettings = {
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    server:process.env.DB_SERVER,
    database:process.env.DATABASE,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

//se crea la funcion get connection para poder 
export async function getConnection() {
  try {
    const pool = sql.connect(dbSettings)
    return pool;
  } catch (error) {
    console.error(error)
  }
}

export { sql }