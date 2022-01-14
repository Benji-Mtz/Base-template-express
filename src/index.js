const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/users');
const isLogged = require('./middlewares/logged');

// Configuraciones y motores de vistas
app.set('title', 'Aplicación en Node.js')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// My middleware
// app.use(isLogged)

// Middleware de express
// app.use(express.static(__dirname + '/public'))
app.use(express.static( path.join(__dirname, 'public') ));
// console.log(path.join(__dirname, 'public'));

// middleware para el req.body del controlador
app.use(express.urlencoded({extended: false}))


// Rutas
app.get('/', (req, res) => {
    // res.send('Bienvenidos')
    res.render('index')
})

// app.use(userRoutes);
app.use('/users',userRoutes);

app.listen(app.get('port'), () => {
    console.log(`server on: localhost:${app.get('port')}, configuracion: ${app.get('title')}`)
})