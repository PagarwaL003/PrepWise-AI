import React from "react";
import { FaTrash } from "react-icons/fa6";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="tezt-[14px]">{content}</p>
      <div className="flex justify-end mt-6">
        <button type="button" className="btn-small" onClick={onDelete}>
          <FaTrash size={13} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
