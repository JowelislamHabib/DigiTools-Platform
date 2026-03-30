import React from "react";
import Cards from "./Cards";

const AllProducts = () => {
  return (
    <div className="container mx-auto mt-30 mb-30 space-y-4">
      <div className="text-center flex gap-4 flex-col">
        <h1 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] text-base">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="tabs tabs-box rounded-full w-fit">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full text-base font-bold pl-6 pr-6 "
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full text-base font-bold pl-6 pr-6"
            aria-label="Cart (2)"
          />
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default AllProducts;
