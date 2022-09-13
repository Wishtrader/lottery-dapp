import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";


function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-x-2 mb-10">
        <PropagateLoader color="#fbc531" />
        <h1 className="text-white text-lg uppercase mt-10">Loading Wishmaster Draw...</h1>
      </div>
    </div>
  );
}

export default Loading;
