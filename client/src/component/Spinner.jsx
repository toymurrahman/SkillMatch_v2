import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-black border-teal-500"></div>
    </div>
  );
};

export default Spinner;

