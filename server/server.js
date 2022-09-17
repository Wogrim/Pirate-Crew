
const PORT=8000;
const DB = "pirates";

//main express server thing
const express = require('express');
const app = express();

//cors to allow requests from the react server
const cors = require('cors');
app.use(cors());

//express middleware to access req.body (POST data)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect to database (async)
require("./config/mongoose.config")(DB);

//register routes
require("./routes/pirates.routes")(app);

//start the server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
