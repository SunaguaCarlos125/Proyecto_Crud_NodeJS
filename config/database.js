const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hospitaldb'
});

db.connect((err) => {
    if(err){
        console.error('Error en la conexion con la base de datos: ', err.message);
        return;
    }
    console.log('Conectado con MySQL');
});

module.exports = db;