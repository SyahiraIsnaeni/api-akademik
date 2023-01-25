const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "api_akademik",
    password: "Jeykeylucu07",
    port: 5432,
});

module.exports = pool;