require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")
const questionRoutes = require("./routes/questionRoutes");
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController");
const serverless = require("serverless-http");

const app = express();
// middleware to handle cors
const allowedOrigin = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigin.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);


// middlewares to handle json
app.use(express.json());

// routes
app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/sessions" , sessionRoutes);
app.use("/api/v1/questions" , questionRoutes);
app.use("/api/v1/ai/generate-questions" , protect , generateInterviewQuestions);
app.use("/api/v1/ai/generate-explanation" , protect , generateConceptExplanation);

// serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// connect to the database
connectDB();


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log("✅ Server is running on port " + PORT);
// });

export default app;