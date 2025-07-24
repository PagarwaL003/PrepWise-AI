import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import toast from "react-hot-toast";
import { getInitials } from "../../utils/helper";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    toast.success("Logged Out!");
    navigate("/");
  };
  return (
    user && (
      <div className="flex items-center">
        <img
          src={user.profileImageUrl || ""}
          className="w-11 h-11 bg-gray-300 rounded-full mr-3"
        />
        <div>
          <div className="text-[17px] text-black font-black leading-3">
            {user.name || ""}
          </div>
          <div>
            <button
              className=" text-amber-600 text-[14px] font-semibold cursor-pointer hover:underline flex mt-1.5 gap-1"
              onClick={handleLogout}
            >
              <LuLogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
