const Pool = require ('pg').Pool;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "api_akademik",
    password: "Sempakkuda_15",
    port: 5432,
});
