'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Producto = require('../modelos/producto.js');
const data = require('../import-data/01-products.json');
var helper = require('../helpers/funcionesdeAyuda');
const producto = require('../modelos/producto.js');

// Creamos una funcion 
async function insertMasivo(req, res) {


    Producto.insertMany(data)
        .then(function (mongooseDocuments) {
            res.status(200).send({ mensaje: mongooseDocuments })
        })
        .catch(function (err) {
            res.status(500).send({ error: err })
        });




}

async function buscar(req, res) {
    try {
        let busqueda = req.query.producto

        var productoserie = await Producto.findOne({ id: busqueda }).exec()
        if (productoserie != null) {
            if (helper.palindromo(productoserie.description)) {
                productoserie._doc.newprice = parseInt(productoserie.price * 0.5)
            } else {
                productoserie._doc.newprice = productoserie.price
            }

            res.status(200).send({mensaje:"ok",productos:[productoserie] })
        }

        if (busqueda.length < 3) {
            res.status(404).send({ mensaje: "sin resultados" })
        }

        var productos = await Producto.find({
            $or: [{ description: { $regex: '.*' + busqueda + '.*' } },
            { brand: { $regex: '.*' + busqueda + '.*' } }]
        }).exec()


        productos.forEach(producto => {

            if (helper.palindromo(producto.description)) {
                producto._doc.newprice = parseInt(producto.price * 0.5)
            } else {
                producto._doc.newprice = producto.price
            }
            producto._doc.palindromo = helper.palindromo(producto.description);

        });

        res.status(200).send({mensaje:"ok",productos:productos })

    } catch (error) {
        res.status(500).send({ mensaje: `error:` + error })
    }

}




module.exports = {
    insertMasivo,
    buscar
};
