require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const pino = require('pino');

const app = express();
const logger = pino({ level: 'info' });
const routes = require("./routes")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);


app.get("/", (req, res) => res.send({message: 'API is running'}))
app.listen(process.env.PORT, function () {
    logger.info(`app listening on port ${process.env.PORT}!`);
});
