import React from "react";

const Button = ({ text, func }) => {
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-gradient-to-r from-red-600 to-blue-600 border-white text-white shadow-lg hover:shadow-blue-500/30 hover:scale-105 font-bold uppercase tracking-wider transition-all duration-300"
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;