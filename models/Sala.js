const db = require('../config/database');

class Sala {
    static getAll(callback) {
        db.query('SELECT * FROM salas', callback);
    }
    static getById(id, callback) {
        db.query('SELECT * FROM salas WHERE id = ?', [id], callback);
    }
    static create(data, callback) {
        const sql = 'INSERT INTO salas (nombre, capacidad) VALUES (?, ?)';
        db.query(sql, [data.nombre, data.capacidad], callback);
    }
    static update(id, data, callback) {
        const sql = 'UPDATE salas SET nombre = ?, capacidad = ? WHERE id = ?';
        db.query(sql, [data.nombre, data.capacidad, id], callback);
    }
    static delete(id, callback) {
        db.query('DELETE FROM salas WHERE id = ?', [id], callback);
    }
}
module.exports = Sala;