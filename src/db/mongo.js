const mongoose = require("mongoose");
const logger = require("../utils/winston");

mongoose
  .connect(process.env.MONGO_URI, {})
  .then((message) => {
    logger.info("Connected to database!");
  })
  .catch((e) => {
    logger.error(e);
  });
