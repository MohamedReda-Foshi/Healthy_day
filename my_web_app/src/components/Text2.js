import React from "react";
import  video from "../asseet/h2o.mp4" 

function Text2() {
  return (
    <div className="flex justify-center items-center py-5 flex-col">
    <h1 className="text-3xl  font-bold mb-5">
      Watch the Video to Know More
    </h1>
    <div className="h-[200px] w-[400px] mb-4"> {/* Using h-[160px] and w-[160px] for fixed size */}
    <video
          src={video} // Using the default import for the video
          playsInline // Ensures the video plays inline on mobile devices
          className="object-cover rounded-lg shadow-md w-[400px] h-[150px]" // Adjusted styles
          controls // Add controls for video playback
        />
    </div>

    <div className="px-4 text-x dark:text-black">
      <p className="mb-3 dark:text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        molestias natus. Facilis, dolorum porro! Totam tenetur earum
        deleniti voluptate laboriosam consequatur dicta est odio repellendus
        nam voluptatum, quisquam, nulla sed!
      </p>
      <p className="dark:text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        molestias natus. Facilis, dolorum porro! Totam tenetur earum
        deleniti voluptate laboriosam consequatur dicta est odio repellendus
        nam voluptatum, quisquam, nulla sed!
      </p>
    </div>
  </div>
  );
}

export default Text2;
