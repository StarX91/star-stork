import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar";
import Live from "./Live";
import Dashboard from "./Dashboard";
import TrainingTask from "./TrainingTask/TrainingTask"; // Import the TrainingTask component
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current route is '/training-task'
  const isTrainingTask = location.pathname === "/training-task";

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}

      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row lg:mx-28 my-8 w-full lg:w-10/12 rounded-3xl">
          {/* Conditionally Render Sidebar and Content */}
          {!isTrainingTask && (
            <div className="flex-col w-full lg:w-1/5 ">
              <Live name="Images" imgurl={<FaImages />} />
              <Live name="Objects" imgurl={<FaCube />} />
              <Live
                name="Task"
                imgurl={<FaTasks />}
                arrow={<MdKeyboardArrowRight />}
              />
              <Live
                name="Detectors"
                imgurl={<FaSearch />}
                arrow={<MdKeyboardArrowRight className="mr-60" />}
              />
            </div>
          )}

          {/* Content Area or Full Page for Training Task */}
          <div
            className={`w-full ${
              isTrainingTask ? "lg:w-full" : "lg:w-10/12"
            } p-4`}
          >
            <Routes>
              {/* Default Route to Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Route to Training Task Page */}
              <Route path="/training-task" element={<TrainingTask />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default Main;
