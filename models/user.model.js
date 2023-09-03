const { pool } = require('../config/db');

async function get_findAll() {
    const { rows } = await pool.query("select * from usuarios;");
    return rows;
}

module.exports = {
    get_findAll
  }