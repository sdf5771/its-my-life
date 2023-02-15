require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DATABASE_ADDRESS,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    databaseL: process.env.DATABASE_NAME,
});

// connection.connect();
//
// connection.query('SELECT * FROM member', (error, rows, fields) => {
//     if(error) throw error;
//     console.log('User info is: ', rows);
// })
//
// connection.end();

module.exports = connection;
