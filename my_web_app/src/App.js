import Home from "./Page/Home";
import User from "./Page/User";
import Loginp from "./Page/Loginp";
import SingUp from "./Page/SingUp";
import Info from "./Page/Info";
import CalenderPage from "./Page/CalenderPage";
import Taskpage from "./Page/Taskpage";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Err from "./components/Err";
import AppDesk from "./AppDesk";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} overflow-y-scroll h-lvh`}>
      <div >
        <div >
          <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>

        <div className=" py-10 ">
          <div className="text-black dark:bg-[#333333]  dark:text-white d  py-4">
            <Routes>
              <Route path="/" element={<AppDesk />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/calender" element={<CalenderPage />} />
              <Route path="/task" element={<Taskpage />} />
              <Route path="/login" element={<Loginp />} />
              <Route path="/SingUp" element={<SingUp />} />
              <Route path="/info" element={<Info />} />
              <Route path="*" element={<Err />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
