const reviewService = require("../service/review");

class reviewController {
  createReview(req, res) {
    reviewService.createReviewService(req, res);
  }

  deleteReview(req, res) {
    reviewService.deleteReviewService(req, res);
  }

  updateReview(req, res) {
    reviewService.updateReviewService(req, res);
  }

  getReview(req, res) {
    reviewService.getReviewService(req, res);
  }
}

module.exports = new reviewController();
