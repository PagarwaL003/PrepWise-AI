const express = require("express");
const {
  togglePinQuestion,
  updateQuestionNote,
  addQuestionsToSession,
  deleteQuestion
} = require("../controllers/questionController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);
router.post("/:id/note", protect, updateQuestionNote);
router.delete("/:id" , protect , deleteQuestion);

module.exports = router;
