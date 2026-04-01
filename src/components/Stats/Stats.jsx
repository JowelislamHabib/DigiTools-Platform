import React from "react";

const Stats = () => {
  return (
<div className="bg-linear-[-60deg] from-[#ff5858] to-[#f09819]">
      <div className="container mx-auto px-4 md:px-0 ">
      <div className="p-8 md:p-12 mb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center">
            <h3 className="text-5xl md:text-7xl font-extrabold text-white">
              50K+
            </h3>
            <p className="text-white/80 text-lg md:text-xl mt-2 font-medium">
              Active Users
            </p>
          </div>
          <div className="hidden md:flex col-span-1 justify-center">
            <div className="h-20 w-px bg-white/30"></div>
          </div>
          <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center py-8 md:py-0">
            <h3 className="text-5xl md:text-7xl font-extrabold text-white">
              200+
            </h3>
            <p className="text-white/80 text-lg md:text-xl mt-2 font-medium">
              Premium Tools
            </p>
          </div>
          <div className="hidden md:flex col-span-1 justify-center">
            <div className="h-20 w-px bg-white/30"></div>
          </div>
          <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center">
            <h3 className="text-5xl md:text-7xl font-extrabold text-white">4.9</h3>
            <p className="text-white/80 text-lg md:text-xl mt-2 font-medium">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Stats;
