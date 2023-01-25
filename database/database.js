const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "bintangjuara",
    password: "@Influenc3r",
    port: 5432,
});

module.exports = pool;