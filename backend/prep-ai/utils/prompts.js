// Prompt to generate interview questions and answers
const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions
) => `
You are an AI trained to generate technical interview questions and answers.
Task:
    - Role: ${role}
    - Candidate Experience: ${experience} years
    - Focus Topics: ${topicsToFocus}
    - Write ${numberOfQuestions} interview questions.
    - For each question, generate a detailed but begiiner-friendly answer.
    - If the answer needs a code example, add a small code block inside.
    - Keep formatting very clean.
    - Return a pure JSON like:
        [
            {
                "question":"Question here?",
                "answer":"Answer here."
            },
            ...
        ]
    Important: Do NOT add any extra text. Only return valid JSON.
`;

// Prompt to generate a concept explanation for a question and answer
const conceptExplainPrompt = (question) => `
You are an AI trained to generate technical interview questions and answers.
Task: 
    - Explain the following interview question and its concept in depth as if you're teaching a beginner developer.
    - Question: "${question}"
    - After the explanation, provide a short and clear title that summarizes the concept for the article or page header.
    - If the explanation includes a code example, provide a small code block.
    - Keep the formatting very clean and clear.
    - Return result as a pure JSON object in the following format:

            {
                "title":"Short title here?",
                "explanation":"Explanation here."
            },
            ...
        
Important: Do Not add any extra text outside the JSON format. Only return the valid JSON.
`;

module.exports = {
  questionAnswerPrompt,
  conceptExplainPrompt,
};
