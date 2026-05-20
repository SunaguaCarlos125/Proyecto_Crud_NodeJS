const TipoDiagnostico = require('../models/TipoDiagnostico');

exports.index = (req, res) => {
    TipoDiagnostico.getAll((err, tipos) => {
        if (err) return res.status(500).send('Error al obtener los tipos de diagnostico');
        res.render('tiposDiagnostico/index', { tipos });
    });
};

exports.nuevo = (req, res) => {
    res.render('tiposDiagnostico/form', { tipo: null, accion: 'crear' });
};

exports.crear = (req, res) => {
    const { nombre } = req.body;
    TipoDiagnostico.create({ nombre }, (err) => {
        if (err) return res.status(500).send('Error al crear el tipo de diagnostico');
        res.redirect('/tiposdiagnostico');
    });
};

exports.editar = (req, res) => {
    TipoDiagnostico.getById(req.params.id, (err, rows) => {
        if (err || rows.length === 0) return res.status(404).send('Tipo de diagnostico no encontrado');
        res.render('tiposDiagnostico/form', { tipo: rows[0], accion: 'editar' });
    });
};

exports.actualizar = (req, res) => {
    const { nombre } = req.body;
    TipoDiagnostico.update(req.params.id, { nombre }, (err) => {
        if (err) return res.status(500).send('Error al actualizar');
        res.redirect('/tiposdiagnostico');
    });
};

exports.eliminar = (req, res) => {
    TipoDiagnostico.delete(req.params.id, (err) => {
        if (err) return res.status(500).send('Error al eliminar');
        res.redirect('/tiposdiagnostico');
    });
};