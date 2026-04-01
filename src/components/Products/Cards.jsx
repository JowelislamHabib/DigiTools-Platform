import React, { useState } from "react";
import Card from "./Card.jsx";

const Cards = ({ allData, handleAddToCart, cartItem }) => {
  return (
    <div className="container mx-auto bg-[#fdfdfd] rounded-2xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allData.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              cartItem={cartItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
