/**
 * Created by IlyaLitvinov on 14.10.16.
 */
var express = require('express'),
    listModel = require('../models/list.js'),
    router = express.Router();



router.get('/', function (req, res) {
    setTimeout(function () {
        res.status(200).send(listModel.getItems());
    }, 0);
});

router.post('/', function (req, res) {
    var response;

    if (req.body) {
        setTimeout(function () {
            response = listModel.setItem(req.body);
            res.status(200).send(response);
        }, 0);
    } else {
        res.status(500).send('Bad request, please specify comment field').end();
    }
});

router.put('/:id', function (req, res) {
    if (req.params.id && req.body) {
        if(!req.body.title || !req.body.id || !req.body.completed) {
            res.status(400).send('Title id and completed required').end();
        } else {
            res.status(200).send(listModel.updateItem(req.body, req.params.id));
        }

    } else if (!req.params.id) {
        res.status(404).send('Not found').end()
    }
    else {
        res.status(500).send('Bad request').end()
    }
});

router.delete('/:id', function (req, res) {
    if (req.params.id) {
        var responseData = listModel.deleteItem(req.params.id);
        if(responseData) {
            res.status(200).send(responseData);
        } else {
            res.status(404).send('Not found');
        }
    }
});

module.exports = router;
