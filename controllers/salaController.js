const Sala = require('../models/Sala');

exports.index = (req, res) => {
    Sala.getAll((err, salas) => {
        if (err) return res.status(500).send('Error al obtener las salas');
        res.render('salas/index', { salas });
    });
};

exports.nuevo = (req, res) => {
    res.render('salas/form', { sala: null, accion: 'crear' });
};

exports.crear = (req, res) => {
    const { nombre, capacidad } = req.body;
    Sala.create({ nombre, capacidad }, (err) => {
        if (err) return res.status(500).send('Error al crear la sala');
        res.redirect('/salas');
    });
};

exports.editar = (req, res) => {
    Sala.getById(req.params.id, (err, rows) => {
        if (err || rows.length === 0) return res.status(404).send('Sala no encontrada');
        res.render('salas/form', { sala: rows[0], accion: 'editar' });
    });
};

exports.actualizar = (req, res) => {
    const { nombre, capacidad } = req.body;
    Sala.update(req.params.id, { nombre, capacidad }, (err) => {
        if (err) return res.status(500).send('Error al actualizar la sala');
        res.redirect('/salas');
    });
};

exports.eliminar = (req, res) => {
    Sala.delete(req.params.id, (err) => {
        if (err) return res.status(500).send('Error al eliminar la sala');
        res.redirect('/salas');
    });
};