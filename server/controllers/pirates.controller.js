
const ThingModel = require("../models/pirates.model");

//read all
module.exports.findAll = (req, res) => {
    ThingModel.find()
        .then(allThings => {
            res.json(allThings);
        })
        .catch(error => {
            res.status(500).json(error);
        })
}

//read specific one
module.exports.findOne = (req, res) => {
    ThingModel.findById(req.params._id)
        .then(oneThing => {
            res.json(oneThing);
        })
        .catch(error => {
            res.status(500).json(error);
        })
}

//create one
module.exports.create = (req, res) => {
    ThingModel.create(req.body)
        .then(newThing => {
            res.json(newThing);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

//update specific one
module.exports.update = (req, res) => {
    ThingModel.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
        .then(updatedThing => {
            res.json(updatedThing);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

//delete specific one
module.exports.delete = (req, res) => {
    ThingModel.deleteOne({ _id: req.params._id })
        .then(result => {
            res.json({ result });
        })
        .catch(error => {
            res.status(400).json(error);
        })
}
