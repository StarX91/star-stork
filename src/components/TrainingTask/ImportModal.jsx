import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ImportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-75 z-50">
      <div className="bg-neutral-800 p-8 rounded-lg w-96">
        <h2 className="text-neutral-300 text-center text-xl font-medium mb-6">
          Import
        </h2>
        <div className="flex justify-around mb-8">
          <button className="relative w-36 h-24 bg-neutral-900 text-neutral-300 border border-neutral-500 rounded-lg flex flex-col justify-center items-center hover:border-neutral-400">
            Star Marg
            <MdKeyboardArrowRight className="absolute bottom-2 right-2 text-neutral-400" />
          </button>
          <button className="relative w-36 h-24 bg-neutral-900 text-neutral-300 border border-neutral-500 rounded-lg flex flex-col justify-center items-center hover:border-neutral-400">
            Local Storage
            <MdKeyboardArrowRight className="absolute bottom-2 right-2 text-neutral-400" />
          </button>
        </div>
        <button
          className="bg-neutral-900 text-neutral-300 py-2 px-6 rounded-md focus:outline-none hover:border-neutral-500 border mx-auto block"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ImportModal;
