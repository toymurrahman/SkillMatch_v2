import React from "react";
import Lottie from "lottie-react";
import load from '../../public/loading.json'
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
    <Lottie animationData={load} loop={true} style={{ width: 150, height: 150 }} />
  </div>
  );
};

export default Spinner;

