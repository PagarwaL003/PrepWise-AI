const Question = require("../models/Question");
const Session = require("../models/Session");

// @desc Add questions to an existing session
// @route POST /api/v1/questions/add
// @access Private
const addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Input Data" });
    }
    const session = await Session.findById(sessionId);
    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }

    // Create new questions and link to session
    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: session._id,
        question: q.question,
        answer: q.answer,
      }))
    );

    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    res.status(201).json({
      success: true,
      message: "Questions added",
      questionIds: createdQuestions,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Toggle pin/unpin a question
// @route POST /api/v1/questions/:id/pin
// @access Private
const togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }
    question.isPinned = !question.isPinned;
    await question.save();
    res
      .status(200)
      .json({ success: true, isPinned: question.isPinned, question });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update/add a note to a question
// @route POST /api/v1/questions/:id/note
// @access Private
const updateQuestionNote = async (req, res) => {
  try {
    const { note } = req.body;
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }
    question.note = note;
    await question.save();
    res.status(200).json(question.note);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a question by id and remove it from its session
// @route DELETE /api/v1/questions/:id/delete
// @access Private
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    // Remove question reference from the session's questions array
    await Session.updateOne(
      { _id: question.session },
      { $pull: { questions: question._id } }
    );

    // Delete the question
    await question.deleteOne();

    res.status(200).json({ success: true, message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  updateQuestionNote,
  addQuestionsToSession,
  togglePinQuestion,
  deleteQuestion,
};
