const Hospitalizacion = require('../models/Hospitalizacion');
const Paciente = require('../models/Paciente');
const Sala = require('../models/Sala');

exports.index = (req, res) => {
    Hospitalizacion.getAll((err, hospitalizaciones) => {
        if (err) return res.status(500).send('Error al obtener las hospitalizaciones');
        res.render('hospitalizaciones/index', { hospitalizaciones });
    });
};

exports.nuevo = (req, res) => {
    Paciente.getAll((err, pacientes) => {
        if (err) return res.status(500).send('Error');
        Sala.getAll((err, salas) => {
            if (err) return res.status(500).send('Error');
            res.render('hospitalizaciones/form', { 
                hospitalizacion: null, 
                accion: 'crear',
                pacientes,
                salas
            });
        });
    });
};

exports.crear = (req, res) => {
    const { paciente_id, fecha_ingreso, fecha_alta, sala_id } = req.body;
    Hospitalizacion.create({ paciente_id, fecha_ingreso, fecha_alta, sala_id }, (err) => {
        if (err) return res.status(500).send('Error al crear la hospitalizacion');
        res.redirect('/hospitalizaciones');
    });
};

exports.editar = (req, res) => {
    Hospitalizacion.getById(req.params.id, (err, rows) => {
        if (err || rows.length === 0) return res.status(404).send('Hospitalizacion no encontrada');
        Paciente.getAll((err, pacientes) => {
            if (err) return res.status(500).send('Error');
            Sala.getAll((err, salas) => {
                if (err) return res.status(500).send('Error');
                res.render('hospitalizaciones/form', { 
                    hospitalizacion: rows[0], 
                    accion: 'editar',
                    pacientes,
                    salas
                });
            });
        });
    });
};

exports.actualizar = (req, res) => {
    const { paciente_id, fecha_ingreso, fecha_alta, sala_id } = req.body;
    Hospitalizacion.update(req.params.id, { paciente_id, fecha_ingreso, fecha_alta, sala_id }, (err) => {
        if (err) return res.status(500).send('Error al actualizar la hospitalizacion');
        res.redirect('/hospitalizaciones');
    });
};

exports.eliminar = (req, res) => {
    Hospitalizacion.delete(req.params.id, (err) => {
        if (err) return res.status(500).send('Error al eliminar la hospitalizacion');
        res.redirect('/hospitalizaciones');
    });
};