import React, { useState } from "react";
import { FaSearch, FaFileImport } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import NewProjectModal from "./NewProjectModal";
import { Menu } from "@headlessui/react";
import ImportModal from "./ImportModal";
import ImagesetModal from "./ImagesetModal"; // Import the modal component

const TrainingTask = () => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isTaskNameModalOpen, setIsTaskNameModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false); // Added state for ImportModal
  const [projects, setProjects] = useState([]);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [taskName, setTaskName] = useState("");
  const [showImagesComponent, setShowImagesComponent] = useState(false);
  const [activeStep, setActiveStep] = useState("Create Task");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isImagesetModalOpen, setIsImagesetModalOpen] = useState(false);

  const [isTaskAssigned, setIsTaskAssigned] = useState(false);

  const toggleNewProjectModal = () => {
    setIsNewProjectModalOpen(!isNewProjectModalOpen);
  };

  const toggleTaskNameModal = () => {
    setIsTaskNameModalOpen(!isTaskNameModalOpen);
  };

  const toggleImportModal = () => {
    setIsImportModalOpen(!isImportModalOpen);
  };

  const toggleImagesetModal = () => {
    setIsImagesetModalOpen(!isImagesetModalOpen);
  };

  const addNewProject = (name) => {
    const newProject = {
      name,
      date: new Date().toLocaleDateString(),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const deleteProject = (index) => {
    setProjects((prevProjects) =>
      prevProjects.filter((_, projectIndex) => projectIndex !== index)
    );
    setEditingProjectIndex(null);
  };

  const renameProject = (index) => {
    const newName = prompt(
      "Enter the new name for the project:",
      projects[index].name
    );
    if (newName) {
      setProjects((prevProjects) =>
        prevProjects.map((project, projectIndex) =>
          projectIndex === index ? { ...project, name: newName } : project
        )
      );
    }
    setEditingProjectIndex(null);
  };

  const openTaskModal = (index) => {
    setSelectedProject(projects[index]);
    setIsTaskNameModalOpen(true);
  };

  const handleCreateTask = () => {
    console.log(
      `Task "${taskName}" created for project: ${selectedProject.name}`
    );
    setIsTaskNameModalOpen(false);
    setTaskName("");
    setShowImagesComponent(true);
    setActiveStep("Images");
    setIsTaskAssigned(true);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 p-2 min-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-neutral-300 text-3xl font-semibold">
          Training Task
        </h1>
      </div>

      <div className="flex justify-center pt-4 space-x-16">
        <button
          className={`py-2 px-6 rounded-full focus:outline-none border ${
            activeStep === "Create Task"
              ? "bg-black text-neutral-400 hover:border-neutral-400"
              : "bg-neutral-900 text-neutral-500"
          }`}
        >
          Create Task
        </button>

        <button
          className={`py-2 px-10 rounded-full focus:outline-none border ${
            activeStep === "Images"
              ? "bg-black text-neutral-400 hover:border-neutral-400"
              : "bg-neutral-900 text-neutral-500"
          }`}
          onClick={() => {
            if (!isTaskAssigned) {
              alert("Create a task first");
            } else {
              setActiveStep("Images");
              setShowImagesComponent(true);
            }
          }}
        >
          Images
        </button>

        <button
          className="bg-neutral-900 text-neutral-500 py-2 px-10 rounded-full focus:outline-none"
          onClick={() => alert("Complete image section first")}
        >
          Setup
        </button>

        <button
          className="bg-neutral-900 text-neutral-500 py-2 px-10 rounded-full focus:outline-none"
          onClick={() => alert("Complete the setup first")}
        >
          Report
        </button>
      </div>

      {!showImagesComponent ? (
        <div className="bg-neutral-900 h-96 p-8 rounded-lg shadow-md space-y-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="relative flex items-center w-1/5">
              <FaSearch className="absolute left-3 text-neutral-500" />
              <input
                type="text"
                placeholder="Search Tasks"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-neutral-800 text-neutral-400 rounded-md focus:outline-none"
              />
            </div>

            <h2 className="text-neutral-500 text-lg font-medium">
              Select Project
            </h2>

            <button
              className="bg-neutral-900 text-neutral-300 py-2 px-4 rounded-md focus:outline-none hover:border-neutral-500 border"
              onClick={toggleNewProjectModal}
            >
              + New Project
            </button>
          </div>

          <div className="flex-1 flex flex-wrap justify-start space-x-6 items-start">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative p-4 rounded-lg w-60 h-full flex flex-col cursor-pointer"
                  onClick={() => openTaskModal(index)}
                >
                  <div className="bg-neutral-700 h-48 w-48 rounded-md"></div>

                  <div className="mt-2 flex justify-between items-center w-full">
                    <div>
                      <p className="text-neutral-300 text-md">{project.name}</p>
                      <p className="text-neutral-500 text-sm">{project.date}</p>
                    </div>

                    <div className="relative">
                      <button
                        className="text-neutral-500 mr-4 hover:text-neutral-300 focus:outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingProjectIndex(
                            editingProjectIndex === index ? null : index
                          );
                        }}
                      >
                        ...
                      </button>
                      {editingProjectIndex === index && (
                        <div className="absolute right-0 mt-2 w-24 bg-neutral-800 text-neutral-300 rounded-md shadow-lg">
                          <button
                            className="block w-full px-2 py-1 hover:bg-neutral-700 text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              renameProject(index);
                            }}
                          >
                            Rename
                          </button>
                          <button
                            className="block w-full px-2 py-1 hover:bg-neutral-700 text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteProject(index);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-neutral-400">No projects found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex bg-neutral-900 min-h-[500px] p-8 rounded-lg shadow-md justify-between items-start">
          <h2 className="text-neutral-400 text-lg font-medium">
            Project name / Imageset (0)
          </h2>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-neutral-300 border border-neutral-400 p-3 rounded-md"
            >
              + Imageset
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button
                    onClick={toggleImportModal}
                    className="flex w-full items-center px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                  >
                    <FaFileImport className="mr-3" aria-hidden="true" />
                    Import
                  </button>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300"
                    onClick={toggleImagesetModal}
                  >
                    <CgAddR className="mr-3" aria-hidden="true" />
                    Create
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Import Modal */}
      {isImportModalOpen && (
        <ImportModal isOpen={isImportModalOpen} onClose={toggleImportModal} />
      )}

      {/* Render the ImagesetModal */}
      <ImagesetModal
        isOpen={isImagesetModalOpen}
        onClose={toggleImagesetModal}
      />

      {/* New Project Modal */}
      {isNewProjectModalOpen && (
        <NewProjectModal
          isOpen={isNewProjectModalOpen}
          onClose={toggleNewProjectModal}
          onSave={addNewProject}
        />
      )}

      {/* Task Name Modal */}
      {isTaskNameModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-lg text-neutral-400 font-medium">
              Enter Task Name
            </h3>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="mt-4 w-full p-2 rounded-md bg-neutral-700 text-neutral-400 focus:outline-none"
            />
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setIsTaskNameModalOpen(false)}
                className="px-4 py-2 bg-neutral-700 text-neutral-400 rounded-md focus:outline-none hover:bg-neutral-600"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                className="px-4 py-2 bg-blue-600 text-neutral-100 rounded-md focus:outline-none hover:bg-blue-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingTask;
