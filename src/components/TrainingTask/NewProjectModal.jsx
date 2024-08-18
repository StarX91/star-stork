import React, { useState } from "react";
import Modal from "react-modal"; // Ensure you install 'react-modal'

const NewProjectModal = ({ isOpen, onClose, onSave }) => {
  const [projectName, setProjectName] = useState("");

  const handleAddProject = () => {
    if (projectName.trim()) {
      onSave(projectName); // Call the function passed from the parent
      setProjectName(""); // Clear the input field
      onClose(); // Close the modal after adding the project
    } else {
      alert("Please enter a project name.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add New Project"
      className="bg-neutral-900 p-8 rounded-xl shadow-xl w-1/3 mx-auto mt-40"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {/* Modal Header */}
      <h2 className="text-neutral-300 text-center text-xl font-semibold mb-6">
        Add New Project
      </h2>

      {/* Project Name Input */}
      <div className="mb-6">
        <label className="text-neutral-500 text-sm mb-2 block">Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter name"
          className="w-full p-2 bg-neutral-800 text-neutral-300 rounded-md focus:outline-none"
        />
      </div>

      {/* Empty Container */}
      <div className="bg-neutral-800 h-40 mb-6 rounded-md"></div>

      {/* Modal Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onClose}
          className="bg-neutral-800 text-neutral-400 py-2 px-4 rounded-md hover:border-neutral-500 border"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="bg-neutral-700 text-white py-2 px-6 rounded-md hover:bg-neutral-600"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default NewProjectModal;
