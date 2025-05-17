import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 relative">
      {/* Hero Background Element */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute w-64 h-64 -top-10 -left-10 rounded-full bg-red-700 blur-3xl"></div>
        <div className="absolute w-64 h-64 -bottom-10 -right-10 rounded-full bg-blue-700 blur-3xl"></div>
      </div>
      
      <div className="flex flex-col gap-6">
        <p className="tracking-widest font-bold text-red-500">FORGE YOUR LEGACY</p>
        <h1 className="uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
          <span className="px-1 mr-1 text-white relative">GYM
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500"></span>
          </span>
          <span className="text-blue-500 px-1 relative">MO
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></span>
          </span>
        </h1>
      </div>
      
      <p className="text-sm md:text-base font-light max-w-xl">
        I hereby acknowledge that I may become{" "}
        <span className="text-red-500 font-bold">UNBELIEVABLY POWERFUL</span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-500 font-bold">IRON WARRIOR</span>,
        afflicted with severe body dysmorphia, unable to fit through doors.
      </p>
      
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"ACCEPT THE CHALLENGE"}/>
    </div>
  );
};

export default Hero;