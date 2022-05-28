const express = require('express')
const app = express()
const router = require('./routes/main');
app.use(express.json());
app.set('port', 3000)

//server listen
app.use('/', router);
app.listen(app.get('port'),() =>{
    console.log(`Escuchando en el puerto ${app.get('port')}`)
})
