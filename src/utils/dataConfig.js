const db = require("../models");

class dataConfig {
  async pagination(model, currentPage, filter) {
    const numberOfRecord = 5;
    var hasPreviosPage = 1;
    var hasNextPage = 1;
    var totalPage = 0;
    var totalNumber = 0;
    totalNumber = await db[model].count(filter);
    if (totalNumber % numberOfRecord == 0) {
      totalPage = totalNumber / numberOfRecord;
    } else {
      totalPage =
        (totalNumber - (totalNumber % numberOfRecord)) / numberOfRecord + 1;
    }
    if (currentPage == 1) {
      hasPreviosPage = 0;
    }
    if (currentPage == totalPage) {
      hasNextPage = 0;
    }

    return {
      totalPage,
      totalNumber,
      hasPreviosPage,
      hasNextPage,
    };
  }
}
module.exports = new dataConfig();
