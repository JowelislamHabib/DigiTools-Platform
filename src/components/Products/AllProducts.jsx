import React, { useState } from "react";
import Cards from "./Cards";
import { use } from "react";
import Cart from "./Cart";

const AllProducts = ({ dataPromise, cartItem, setCartItem }) => {
  const allData = use(dataPromise);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (item) => {
    const isExist = cartItem.find((product) => product.id === item.id);
    if (!isExist) {
      setCartItem([...cartItem, item]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
  };

  const handleCheckout = () => {
    setCartItem([]);
  };

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
            className={`tab rounded-full text-base font-bold pl-6 pr-6 ${
              activeTab === "products"
                ? "bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white!"
                : ""
            }`}
            aria-label="Products"
            onChange={() => setActiveTab("products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full text-base font-bold pl-6 pr-6 ${
              activeTab === "cart"
                ? "bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white!"
                : ""
            }`}
            aria-label={`Cart (${cartItem.length})`}
            onChange={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {activeTab === "products" ? (
        <Cards
          allData={allData}
          handleAddToCart={handleAddToCart}
          cartItem={cartItem}
        />
      ) : (
        <Cart
          cartItem={cartItem}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default AllProducts;
