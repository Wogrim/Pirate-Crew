
const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`connected to database: ${DB}`))
        .catch(err => console.log(`failed to connect to database: ${DB}`, err));
}
