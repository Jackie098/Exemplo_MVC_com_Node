const mysql = require('mysql');
const pool = mysql.pool({
    connectionLimit: 10,
    host: root,
    user: root,
    password: '1234',
    database: 'carros_frota'
});

pool.query('SELECT * FROM carros', (error, results, fields) => {
    if(error)   throw error;
    console.log('The solution is ', results[0])
})