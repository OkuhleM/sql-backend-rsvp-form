const { Pool } = require('pg');

const formDataBase = new Pool({
    user: 'form_user',
    host: 'localhost',
    database: 'rsvp_form',
    password: 'Lindokuhle22',
    port: 5432,
  })
  formDataBase.connect()
module.exports = { formDataBase };