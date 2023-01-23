const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sbintangjuara",
    password: "@Influenc3r",
    port: 5432,
});

module.exports = pool;