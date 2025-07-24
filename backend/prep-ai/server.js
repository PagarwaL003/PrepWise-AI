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

const app = express();
// middleware to handle cors
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies to be sent
  })
);

// connect to the database
connectDB();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("✅ Server is running on port " + PORT);
});
