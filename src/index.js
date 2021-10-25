// import libs to use
const express = require("express");
const useragent = require("express-useragent");
const path = require("path");
const handlebars = require("express-handlebars");
const logger = require("./utils/winston");
const log = require("./middleware/Log");
const route = require("./route");
require("dotenv").config();
require("./db/mongo");

// create server
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(useragent.express());
app.use(log);
// landing page
app.get('/', (req, res) => {
  res.render("views/home");
});
// shorter way
app.use("/api/v1", route);

// set view engine
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
  }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'public'));


// start server
app.listen(3000, function () {
  logger.info("Running on port 3000!");
});
