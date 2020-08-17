var express = require('express');

var router = express.Router();



let {Dog} = require('../models');




// POSTMAN



/* GET users listing. */

router.get('/', async function(req, res, next) {

    let topic = await topic.findAll();

    console.log(dogs)

    res.json(topic);

});



router.get('/:id', async function(req, res, next) {

    console.log(req.params);

    let topic = await topic.findOne({where: {id: req.params.id}});

    console.log(topic);

    // console.log(topic)

    res.json(topic);

});



router.post('/', async function(req, res, next) {

    console.log(req.body);

    const topic = await topic.create(req.body);

    res.json(topic);

});



router.put('/:id', async function(req, res, next) {

    console.log(req.body);

    let dog = await topic.update(req.body, {

        where: {

            id: req.params.id

        }

    });

    res.json(topic);

});



router.delete('/:id', async function(req, res, next) {

    // console.log(req.body);

    const result = await topic.destroy({where: {id: req.params.id}});

    res.json(result);

});



router.get('/profile/:id/name/:name', function(req, res, next) {

    // console.log(req.params);

    // look up the database for user id = 3

    // look up the profile of user

    // manipulations



    res.send('respond with a resource');

});



router.get('/something', function(req, res, next) {

    res.send('respond with a resource');

});



module.exports = router;