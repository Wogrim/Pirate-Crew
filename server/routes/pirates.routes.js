
const ThingController = require('../controllers/pirates.controller');

module.exports = (app) => {
    //create one pirate
    app.post('/api/pirates/new', ThingController.create);
    //read all pirates
    app.get('/api/pirates', ThingController.findAll);
    //read one specific pirate
    app.get('/api/pirates/:_id', ThingController.findOne);
    //update one specific pirate
    app.put('/api/pirates/update/:_id', ThingController.update);
    //delete one specific pirate
    app.delete('/api/pirates/delete/:_id', ThingController.delete);
}
