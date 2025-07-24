const { GoogleGenAI } = require("@google/genai");
const {
  questionAnswerPrompt,
  conceptExplainPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * @desc Generate interview questions and answers using Gemini
 * @route POST /api/v1/ai/generate-questions
 * @access Private
 */
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    // Input validation
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({
        success: false,
        message: "Missing required required",
      });
    }

    // Compose prompt using the prompt utility
    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    let rawText = response.text;

    // clean text
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    res.status(200).json( data );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

/**
 * @desc Generate a concept explanation for a question using AI
 * @route POST /api/v1/ai/generate-explanation
 * @access Private
 */
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    // Input validation
    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // prompt using the prompt utility
    const prompt = conceptExplainPrompt(question);

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    let rawText = response.text;

    // clean text
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};

module.exports = {
  generateInterviewQuestions,
  generateConceptExplanation,
};
