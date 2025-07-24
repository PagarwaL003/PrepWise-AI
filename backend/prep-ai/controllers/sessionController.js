const Session = require("../models/Session");
const Question = require("../models/Question");

// @desc Create a new session and linked questions
// @route POST /api/v1/sessions/create
// @access Private
const createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id;

    // Create session
    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    const questionDocs = await Promise.all(
      questions.map(async (q) => {
        const question = await Question.create({
          session: session._id,
          question: q.question,
          answer: q.answer,
        });
        return question._id;
      })
    );

    session.questions = questionDocs;
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get all sessions for logged in user
// @route POST /api/v1/sessions/my-sessions
// @access Private
const getMySessions = async (req, res) => {
  try {
    const userId = req.user.id;
    const sessions = await Session.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("questions");
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a session by id with populated questions
// @route POST /api/v1/sessions/:id
// @access Private
const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate({
        path: "questions",
        options: { sort: { isPinned: -1, createdAt: 1 } },
      })
      .exec();
    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }
    res.status(200).json({ session });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete a session and its questions
// @route POST /api/v1/sessions/:id
// @access Private
const deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }

    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this session.",
      });
    }

    // Delete all questions linked to this session
    await Question.deleteMany({ session: session._id });
    // delete session
    await session.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Session and questions deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSession,
  deleteSession,
  getMySessions,
  getSessionById,
};
