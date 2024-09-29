import React from "react";
import Button from "./Button";

function Infopage(props) {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-2"> 
        <div className="bg-white shadow-md border  rounded-lg max-w-lg  dark:bg-gray-800 dark:border-gray-700">
         <div className="flex-row flex">

          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="redas"
          />
         </div>

          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {props.Title}
            </h5>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button button="click to now more" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infopage;
