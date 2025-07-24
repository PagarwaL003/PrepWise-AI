import { LuX } from "react-icons/lu";
const Drawer = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed top-[64px] right-0 z-40 h-[calc(100dvh-64px)] p-4 overflow-y-auto transition-transform bg-white w-full md:w-[40vw] shadow-xl shadow-cyan-900 border-r border-l-black ${
        isOpen ? "transition-x-0" : "translate-x-full"
      }`}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h5
          className="flex items-center font-semibold text-black text-[20px]"
          id="drawer-right-label"
        >
          {title}
        </h5>
        {/*Close button  */}
        <button
          className="text-black bg-gray-200 hover:bg-gray-700 hover:text-white rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
          type="button"
          onClick={onClose}
        >
          <LuX  size={18} />
        </button>
      </div>

      {/* body content */}
      <div className="text-sm mx-3 mb-6 text-slate-800">{children}</div>
    </div>
  );
};

export default Drawer;
