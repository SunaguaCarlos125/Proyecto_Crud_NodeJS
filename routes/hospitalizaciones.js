const express = require('express');
const router = express.Router();
const controller = require('../controllers/hospitalizacionController');

router.get('/', controller.index);
router.get('/nuevo', controller.nuevo);
router.post('/', controller.crear);
router.get('/:id/editar', controller.editar);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

module.exports = router;