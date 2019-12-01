const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'bd_carros',
    port: 3306
});

module.exports = pool;

// pool.query('SELECT * FROM carros', (error, results, fields) => {
//     if(error)   throw error;
//     console.log('The solution is ', results[0])
// })