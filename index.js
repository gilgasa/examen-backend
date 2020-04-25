'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3967;

mongoose.connect('mongodb://localhost:27017/prueba_examenbd', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("Conexión a Base de datos corriendo exitosamente");
        app.listen(port, function(){
            console.log("Servidor del api rest de prueba examen escuchando http://localhost:"+port);
        });
    }
});