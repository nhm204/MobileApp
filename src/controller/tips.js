const tipsService = require("../service/tips");

class tipsController {
  createTips(req, res) {
    tipsService.createTipsService(req, res);
  }

  deleteTips(req, res) {
    tipsService.deleteTipsService(req, res);
  }

  updateTips(req, res) {
    tipsService.updateTipsService(req, res);
  }

  getTips(req, res) {
    tipsService.getTipsService(req, res);
  }
}

module.exports = new tipsController();
