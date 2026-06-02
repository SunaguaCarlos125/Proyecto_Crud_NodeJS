const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/salas', require('./routes/salas'));
app.use('/tiposdiagnostico', require('./routes/tiposDiagnostico'));
app.use('/pacientes', require('./routes/pacientes'));
app.use('/hospitalizaciones', require('./routes/hospitalizaciones'));

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});