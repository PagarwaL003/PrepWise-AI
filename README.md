# PrepWise-AI

PrepWise-AI is an AI-powered interview preparation platform designed to help users practice and improve their interview skills. It features a modern web interface, AI-generated questions, and session management.

## Features
- User authentication (Sign Up, Login)
- Create and manage interview sessions
- AI-generated interview questions and concept explanations
- Dashboard with summary cards

## Tech Stack
- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** Gemini AI
- **Deployment:** Vercel 

## Project Structure
```
PrepWise-AI/
├── backend/         # Express API server
├── frontend/
│   └── prep-ai/     # React/Vite frontend app
├── .gitignore
├── README.md
```

## Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your environment variables (see `.env.example` if available).
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend/prep-ai
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm run dev
   ```


