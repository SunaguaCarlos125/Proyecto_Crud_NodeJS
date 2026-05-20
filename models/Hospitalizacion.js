const db = require('../config/database');

class Hospitalizacion {
    static getAll(callback) {
        db.query(`
            SELECT h.*, 
                   p.nombre AS paciente_nombre, 
                   p.apellido AS paciente_apellido, 
                   s.nombre AS sala_nombre
            FROM hospitalizaciones h
            JOIN pacientes p ON h.paciente_id = p.id
            JOIN salas s ON h.sala_id = s.id
        `, callback);
    }
    static getById(id, callback) {
        db.query('SELECT * FROM hospitalizaciones WHERE id = ?', [id], callback);
    }
    static create(data, callback) {
        const sql = 'INSERT INTO hospitalizaciones (paciente_id, fecha_ingreso, fecha_alta, sala_id) VALUES (?, ?, ?, ?)';
        db.query(sql, [data.paciente_id, data.fecha_ingreso, data.fecha_alta || null, data.sala_id], callback);
    }
    static update(id, data, callback) {
        const sql = 'UPDATE hospitalizaciones SET paciente_id = ?, fecha_ingreso = ?, fecha_alta = ?, sala_id = ? WHERE id = ?';
        db.query(sql, [data.paciente_id, data.fecha_ingreso, data.fecha_alta || null, data.sala_id, id], callback);
    }
    static delete(id, callback) {
        db.query('DELETE FROM hospitalizaciones WHERE id = ?', [id], callback);
    }
}
module.exports = Hospitalizacion;