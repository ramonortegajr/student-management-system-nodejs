const mysql = require('mysql2');
require('dotenv').config();
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sms_db'
});

module.exports = con;