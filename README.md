# PrepWise-AI

PrepWise-AI is a modern, AI-powered interview preparation platform designed to help users practice, track, and improve their interview skills. With a sleek interface, smart session management, and AI-generated questions, PrepWise-AI is your all-in-one solution for acing interviews.

---

## ✨ Features

- 🔒 **User Authentication:** Secure sign up and login
- 📝 **Interview Sessions:** Create, manage, and review interview sessions
- 🤖 **AI-Generated Questions:** Get dynamic, role-specific questions and explanations
- 📊 **Dashboard:** Visualize your progress with summary cards
- ⚡ **Fast & Responsive:** Built with Vite and React for a smooth experience

---

## 🛠️ Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| Frontend   | React, Vite, JavaScript, TailwindCSS |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB                              |
| AI         | Gemini AI                            |
| Deployment | Vercel (frontend),Render (backend)   |

---

## 📁 Project Structure

```text
PrepWise-AI/
├── backend/
│   └── prep-ai/         # Express API server (all backend code)
│       ├── config/      # DB config
│       ├── controllers/ # Route controllers
│       ├── middlewares/ # Auth & upload middleware
│       ├── models/      # Mongoose models
│       ├── routes/      # API routes
│       ├── uploads/     # Uploaded files
│       └── utils/       # Utility functions
├── frontend/
│   └── prep-ai/         # React/Vite frontend app
│       ├── public/      # Static assets
│       ├── src/         # Source code
│       │   ├── components/ # Reusable UI components
│       │   ├── context/    # React context
│       │   ├── Pages/      # App pages
│       │   └── utils/      # Helpers & API
├── .gitignore
├── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) & npm
- [MongoDB](https://www.mongodb.com/) (local or Atlas)


### 1. Backend Setup
```sh
cd backend/prep-ai
npm install
# Create a .env file with your environment variables (see .env.example if available)
npm start
```

### 2. Frontend Setup
```sh
cd frontend/prep-ai
npm install
npm run dev
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


