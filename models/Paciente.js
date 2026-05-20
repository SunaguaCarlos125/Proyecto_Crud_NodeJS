const db = require('../config/database');

class Paciente {
    static getAll(callback) {
        db.query('SELECT * FROM pacientes', callback);
    }
    static getById(id, callback) {
        db.query('SELECT * FROM pacientes WHERE id = ?', [id], callback);
    }
    static create(data, callback) {
        const sql = 'INSERT INTO pacientes (nombre, apellido, diagnostico) VALUES (?, ?, ?)';
        db.query(sql, [data.nombre, data.apellido, data.diagnostico], callback);
    }
    static update(id, data, callback) {
        const sql = 'UPDATE pacientes SET nombre = ?, apellido = ?, diagnostico = ? WHERE id = ?';
        db.query(sql, [data.nombre, data.apellido, data.diagnostico, id], callback);
    }
    static delete(id, callback) {
        db.query('DELETE FROM pacientes WHERE id = ?', [id], callback);
    }
}
module.exports = Paciente;