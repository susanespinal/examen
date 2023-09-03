const { Pool } = require('pg');

const pool = new Pool({
    user: "susan",
    host: "localhost",
    database: "mysusandb",
    password: "password",
    port: "5432",
})
module.exports ={pool}
