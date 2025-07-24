import { useEffect, useRef, useState } from "react";
import {
  LuChevronDown,
  LuPin,
  LuPinOff,
  LuSparkles,
  LuStickyNote,
  LuTrash2,
} from "react-icons/lu";
import AIResponsePreview from "../../Pages/Interview/components/AIResponsePreview";
import Modal from "../Modal";
import DeleteAlertContent from "../DeleteAlertContent";
import NoteDrawer from "../NoteDrawer";
const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
  onDelete,
  addNote,
  note = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });
  const [openNoteDrawer, setOpenNoteDrawer] = useState(false);
  const [noteInput, setNoteInput] = useState(note);

  const contentRef = useRef(null);

  const handleDeleteClick = () => {
    setOpenDeleteAlert({ open: true, data: null });
  };

  const handleConfirmDelete = () => {
    setOpenDeleteAlert({ open: false, data: null });
    onDelete();
  };

  const handleNoteSave = () => {
    addNote(noteInput);
    setOpenNoteDrawer(false);
  };

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="bg-white rounded-lg mb-4 overflow-hidden py-4 px-5 shadow-xl shadow-gray-200 hover:shadow-gray-300 border border-gray-200 hover:border-gray-300 group">
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-start gap-3.5">
            <span className="text-xs md:text-[15px] font-semibold text-gray-400 leading-[18px] ">
              Q.
            </span>
            <h3
              className="text-xs md:text-[14px] font-medium text-gray-800 mr-0 md:mr-20"
              onClick={toggleExpand}
            >
              {question}
            </h3>
          </div>
          <div className="flex items-center justify-end ml-4 relative">
            <div
              className={`flex ${
                isExpanded ? "md:flex" : "md:hidden group-hover:flex"
              }`}
            >
              <button
                className="flex items-center gap-2 text-shadow-2xs text-indigo-800 font-medium bg-indigo-50 px-3 py-1 mr-2 rounded text-nowrap border border-indigo-50 hover:border-indigo-200 cursor-pointer"
                onClick={onTogglePin}
              >
                {isPinned ? (
                  <LuPinOff className="text-xs" />
                ) : (
                  <LuPin className="text-xs" />
                )}
              </button>

              <button
                className="flex items-center gap-2 text-shadow-2xs text-cyan-800 font-medium bg-cyan-50 px-3 py-1 mr-2 rounded text-nowrap border border-cyan-50 hover:border-cyan-200 cursor-pointer"
                onClick={() => {
                  setIsExpanded(true);
                  onLearnMore();
                }}
              >
                <LuSparkles />
                <span className="hidden md:block">Learn More</span>
              </button>

              {/* Add Note Button */}
              <button
                className="flex items-center gap-2 text-shadow-2xs text-yellow-800 font-medium bg-yellow-50 px-3 py-1 mr-2 rounded text-nowrap border border-yellow-50 hover:border-yellow-200 cursor-pointer"
                onClick={() => setOpenNoteDrawer(true)}
              >
                <LuStickyNote className="text-xs" />
                <span className="hidden md:block">
                  {note && note.length > 0 ? "Edit Note" : "Add Note"}
                </span>
              </button>

              <button
                className="flex items-center gap-2 text-shadow-2xs text-red-800 font-medium bg-red-50 px-3 py-1 mr-2 rounded text-nowrap border border-red-50 hover:border-red-200 cursor-pointer"
                onClick={handleDeleteClick}
              >
                <LuTrash2 className="text-xs" />
              </button>
            </div>

            <button
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
              onClick={toggleExpand}
            >
              <LuChevronDown
                className={`transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
          </div>
        </div>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            className="mt-4 text-gray-700 bg-gray-50 px-5 py-3 rounded-lg"
            ref={contentRef}
          >
            <AIResponsePreview content={answer} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={openDeleteAlert?.open}
        onClose={() => setOpenDeleteAlert({ open: false, data: null })}
        title="Delete Alert"
      >
        <div className="w-[30vw]">
          <DeleteAlertContent
            content="Are you sure you want to delete this question?"
            onDelete={handleConfirmDelete}
          />
        </div>
      </Modal>

      {/* Note Modal */}
      <NoteDrawer
        isOpen={openNoteDrawer}
        onClose={() => setOpenNoteDrawer(false)}
        noteInput={noteInput}
        setNoteInput={setNoteInput}
        onSave={handleNoteSave}
      />
    </>
  );
};

export default QuestionCard;
