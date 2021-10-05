'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var productoController = require('../controllers/productoController');


// Llamamos al router
var api = express.Router();
 

api.post('/masivo', productoController.insertMasivo);
api.get('/buscar', productoController.buscar);



module.exports = api;
