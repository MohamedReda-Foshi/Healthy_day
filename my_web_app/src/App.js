import Home from "./Page/Home";
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
      <div className=" md:grid grid-cols-5">
        <div className="  md:col-span-1   ">
          <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>

        <div className=" md:col-span-4 ">
          <div className="text-black bg-green-300 dark:text-white dark:bg-green-600">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} errorElement={<Err />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
