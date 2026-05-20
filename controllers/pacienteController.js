const Paciente = require('../models/Paciente');

exports.index = (req, res) => {
    Paciente.getAll((err, pacientes) => {
        if (err) return res.status(500).send('Error al obtener los pacientes');
        res.render('pacientes/index', { pacientes });
    });
};

exports.nuevo = (req, res) => {
    res.render('pacientes/form', { paciente: null, accion: 'crear' });
};

exports.crear = (req, res) => {
    const { nombre, apellido, diagnostico } = req.body;
    Paciente.create({ nombre, apellido, diagnostico }, (err) => {
        if (err) return res.status(500).send('Error al crear el paciente');
        res.redirect('/pacientes');
    });
};

exports.editar = (req, res) => {
    Paciente.getById(req.params.id, (err, rows) => {
        if (err || rows.length === 0) return res.status(404).send('Paciente no encontrado');
        res.render('pacientes/form', { paciente: rows[0], accion: 'editar' });
    });
};

exports.actualizar = (req, res) => {
    const { nombre, apellido, diagnostico } = req.body;
    Paciente.update(req.params.id, { nombre, apellido, diagnostico }, (err) => {
        if (err) return res.status(500).send('Error al actualizar el paciente');
        res.redirect('/pacientes');
    });
};

exports.eliminar = (req, res) => {
    Paciente.delete(req.params.id, (err) => {
        if (err) return res.status(500).send('Error al eliminar el paciente');
        res.redirect('/pacientes');
    });
};