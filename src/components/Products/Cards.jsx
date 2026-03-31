import React, { useState } from "react";
import Card from "./Card.jsx";

const Cards = ({ allData }) => {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allData.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
