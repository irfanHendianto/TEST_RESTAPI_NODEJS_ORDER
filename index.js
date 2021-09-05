const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order-routes')
const config = require('./config');


const app = express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res) => res.send("Hello"))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.use(`/api`, orderRoutes.routes);



app.listen(config.port, () => console.log("App Listening on url http://localhost:" + config.port));

