import React from "react";

function Button(props) {
  return (
    <div>
      <button className="w-full mt-2 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200">
        {props.button}
        
      </button>
    </div>
  );
}

export default Button;
