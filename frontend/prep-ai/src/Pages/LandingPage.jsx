import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Signup from "./Auth/SignUp";
import Login from "./Auth/Login";
import { APP_FEATURES } from "../utils/data";
import hero from "../assets/hero.png";
import { MdSmartToy } from "react-icons/md";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const { user } = useContext(UserContext);
  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#FFFCEF]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-[34px] text-black font-bold">
              PrepWise
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                onClick={() => setOpenAuthModal(true)}
                className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:text-black border border-white transition-colors cursor-pointer "
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-white px-3 py-1 rounded-full border border-amber-300">
                  <MdSmartToy className="text-lg" />
                  AI Powered
                </div>
              </div>
              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-[60px] text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[18px] text-gray-900 mr-0 md:mr-20 mb-6 tracking-wider">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is
                here.
              </p>
              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        {/* Hero Image */}
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img src={hero} alt="Hero image" className="w-[80vw] h-[46vw] rounded-3xl shadow-xl shadow-amber-200" />
          </section>
        </div>

        {/* Features */}
        <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-[30px] text-center mb-12 font-semibold">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      className="bg-[#ffffff] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 hover:shadow-amber-200 transition border border-amber-100 hover:scale-103"
                      key={feature.id}
                    >
                      <h3 className="text-lg font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                {/* Last 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      className="bg-[#ffffff] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 hover:scale-103"
                      key={feature.id}
                    >
                      <h3 className="text-lg font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-gray-50 text-secondary text-center p-5 mt-5 mb-3 border-t border-gray-100 ">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-2">
            <div className="text-sm text-gray-700">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">Piyush Agarwal</span>. All rights
              reserved.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/ag-piyush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700 font-extrabold flex gap-1"
              >
              <LuLinkedin size={15}/>
                LinkedIn
              </a>
              
              <a
                href="https://github.com/PagarwaL003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-800 font-extrabold flex gap-1"
              >
              <LuGithub size={15}/>
                GitHub
              </a>
              
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-extrabold">Piyush Agarwal</span> &mdash; Empowering
            your interview journey.
          </div>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <Signup setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
