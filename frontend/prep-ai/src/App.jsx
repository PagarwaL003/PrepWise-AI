import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./Pages/LandingPage.jsx";
import Login from "./Pages/Auth/Login.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import Dashboard from "./Pages/Home/Dashboard.jsx";
import Interview from "./Pages/Interview/Interview.jsx";
import UserProvider from "./context/userContext.jsx";

function App() {
  return (
    <UserProvider>
      <div className="text-red-500">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/interview-prep/:sessionId" element={<Interview />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{ className: "", style: { fontSize: "13px" } }}
        />
      </div>
    </UserProvider>
  );
}

export default App;
