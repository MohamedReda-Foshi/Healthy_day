import React from "react";

import Task from "./Task";
import Calender from "./Calender";

function Home() {
  return (
    <div>
      <div className="flex-row justify-around z-30">
        <div className="w-12">
          <Task />
        </div>
        <div >
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default Home;
