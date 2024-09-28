import Home from "./Page/Home";
import User from "./Page/User";
import Sinup from "./Page/Sinup";
import Info from "./Page/Info";
import CalenderPage from "./Page/CalenderPage";
import Taskpage from "./Page/Taskpage";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Err from "./components/Err";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : ""} overflow-y-scroll h-lvh`}>
      <div className=" md:grid grid-cols-6">
        <div className="    ">
          <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>

        <div className=" col-span-6 py-10 ">
          <div className="text-black  dark:text-white dark:bg-green-600 h-full py-4">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} errorElement={<Err />} />
                <Route path="User" element={<User />}  />
                <Route path="CalenderPage" element={<CalenderPage />}  />
                <Route path="Taskpage" element={<Taskpage />}  />
                <Route path="Sinup" element={<Sinup/>}  />
                <Route path="Info" element={<Info/>}  />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
