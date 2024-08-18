import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="bg-black h-screen overflow:hidden">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
