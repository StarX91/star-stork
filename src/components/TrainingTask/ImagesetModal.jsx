import React, { useState } from "react";

const ImagesetModal = ({ isOpen, onClose }) => {
  const [imagesetName, setImagesetName] = useState("");

  const handleInputChange = (e) => {
    setImagesetName(e.target.value);
  };

  const handleAnnotate = () => {
    // Logic for annotation action (e.g., creating the imageset)
    console.log("Annotate clicked with imageset name:", imagesetName);
    onClose(); // Close the modal after annotating
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-900 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold text-center text-neutral-300 mb-2">
          Create an Imageset
        </h2>
        <p className="text-center text-neutral-500 mb-4">
          To upload image you need to create an imageset
        </p>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded bg-neutral-800 text-neutral-300 focus:outline-none"
          placeholder="Enter name"
          value={imagesetName}
          onChange={handleInputChange}
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-400 hover:text-neutral-300 hover:border-neutral-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAnnotate}
            className="px-4 py-2 rounded bg-neutral-600 text-neutral-300 hover:bg-neutral-500"
          >
            Annotate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesetModal;
