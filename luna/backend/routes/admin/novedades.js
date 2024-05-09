var express = require('express');
var router = express.Router();
var modelo_novedades = require('../../models/modelo_novedades');

router.get('/', async function (req, res, next) {

    var novedades = await modelo_novedades.getnovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

router.get('/nueva', (req, res, next) => {

    res.render('admin/nueva', {
        layout: 'admin/layout'

    })

});

router.post('/nueva', async (req, res, next) => {

    try {
        if (req.body.titulo != "" && req.body.cuerpo != "") {
            await modelo_novedades.insertarnovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/nueva', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la novedad'
        });
    }

});

router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id; //extrae el parámetro "id" de la fila seleccionada desde el hbs
    await modelo_novedades.borrarnovedad(id);
    res.redirect('/admin/novedades')
});

router.get('/modificar/:id', async (req, res, next) => {

    var id = req.params.id;
    console.log(id);

    var novedad = await modelo_novedades.getnovedporid(id);


    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next) => {

    try {

        var obj = {   // obj es un array

            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
            tipo: req.body.tipo,

        }

        await modelo_novedades.updatebyID(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {

        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'no se modificó la novedad'
        })
    }
})

module.exports = router;