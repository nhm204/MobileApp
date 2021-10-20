const logger = require("../utils/winston");
module.exports = (req, res, next) => {
  res.on("finish", () => {
    logger.info(
      `Method: ${req.method} - Path: ${req.url} - Status code: ${res.statusCode} - User agent: ${req.useragent.source}`
    );
    next();
  });
  next();
};
