import React from "react";
import FeatIdea from "./FeatIdea"; // Ensure FeatIdea is correctly imported
import Image1 from "../asseet/img1.jpg"; // This is an image import, not a component
import Button from "./Button";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="flex-row  grid-cols-6 gap-10">
      <div className="col-span-2 ">
        <img src={Image1} alt="Feature" className="w-[700px] h-[500px] "/>
      </div>



      <div className="col-span-4">
        {/* FeatIdea should work if correctly imported */}
        <div className="flex-col">
        <FeatIdea description="X" title="tack your Calender" info="Lorem"/>
          <Link to="/calender">
          
            <Button button="to now more"/>
          </Link>

        </div>
        <div className="flex-col">
        <FeatIdea description="X" title="See tack" info="Lorem"/>
          <Link to="/task">
          
            <Button button="to now more" />
          </Link>

        </div>
        <div className="flex-col">
        <FeatIdea description="X" title="tack your attchivement "  info="Lorem"/>
          <Link to="/user">
          
            <Button button="to now more"/>
          </Link>

        </div>

        
 

       
      </div>
    </div>
  );
}

export default Features;
