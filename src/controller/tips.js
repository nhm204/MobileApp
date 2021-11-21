const tipsService = require("../service/tips");

class tipsController {
  createTips(req, res) {
    tipsService.createtipsService(req, res);
  }

  deleteTips(req, res) {
    tipsService.deletetipsService(req, res);
  }

  updateTips(req, res) {
    tipsService.updatetipsService(req, res);
  }

  getTips(req, res) {
    tipsService.gettipsService(req, res);
  }
}

module.exports = new tipsController();
