// import libs to use
const express = require("express");
const useragent = require("express-useragent");
const logger = require("./utils/winston");
const log = require("./middleware/Log");
const route = require("./route");
require("dotenv").config();
require("./db/mongo");

// create server
const app = express();

app.use(express.json());
app.use(useragent.express());
app.use(log);

// create api

// shorter way
app.use(route);

// start server
app.listen(3000, function () {
  logger.info("Running on port 3000!");
});
