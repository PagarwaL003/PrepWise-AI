const NoteDrawer = ({ isOpen, onClose, noteInput, setNoteInput, onSave }) => {
  return (
    <div
      className={`fixed top-1/4 right-0 h-[450px] w-[350px] z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-4 bg-yellow-200 rounded-tl-2xl">
          <span className="font-bold text-yellow-900 text-lg">Notes</span>
          <button
            className="text-yellow-900 font-bold text-3xl cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <textarea
          className="flex-1 m-6 p-4 bg-yellow-100/10 border-2 border-yellow-300 rounded-xl text-yellow-900 text-base resize-none shadow-inner"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write your note here..."
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            minHeight: "200px",
          }}
        />
        <div className="px-6 pb-6">
          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-xl shadow"
            onClick={onSave}
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDrawer;
