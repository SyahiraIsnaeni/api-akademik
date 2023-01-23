const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sbintangjuara",
    password: "Jeykeylucu07",
    port: 5432,
});

module.exports = pool;