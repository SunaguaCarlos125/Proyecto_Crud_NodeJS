const db = require('../config/database');

class TipoDiagnostico {
    static getAll(callback) {
        db.query('SELECT * FROM tiposdiagnostico', callback);
    }
    static getById(id, callback) {
        db.query('SELECT * FROM tiposdiagnostico WHERE id = ?', [id], callback);
    }
    static create(data, callback) {
        const sql = 'INSERT INTO tiposdiagnostico (nombre) VALUES (?)';
        db.query(sql, [data.nombre], callback);
    }
    static update(id, data, callback) {
        const sql = 'UPDATE tiposdiagnostico SET nombre = ? WHERE id = ?';
        db.query(sql, [data.nombre, id], callback);
    }
    static delete(id, callback) {
        db.query('DELETE FROM tiposdiagnostico WHERE id = ?', [id], callback);
    }
}
module.exports = TipoDiagnostico;