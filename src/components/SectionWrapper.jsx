import React from "react";

const SectionWrapper = ({ children, header, title, id}) => {
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10 relative">
      <div
        className="bg-gradient-to-r from-slate-900 to-black py-12 flex flex-col 
      gap-2 justify-center items-center p-4 border-y border-slate-800 shadow-xl relative"
      >
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/100')] opacity-5 pointer-events-none"></div>
        <p className="uppercase font-bold tracking-widest text-red-500">{header}</p>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
          {title[0]} <span className="uppercase text-blue-500">{title[1]} </span>
          {title[2]}
        </h2>
      </div>

      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">{children}</div>
    </section>
  );
};

export default SectionWrapper;