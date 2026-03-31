import { LucideTrash2 } from "lucide-react";
import React from "react";

const Cart = ({ cartItem, handleRemoveFromCart, handleCheckout }) => {
  return (
    <div className="container mx-auto p-4 border border-neutral-100 rounded-2xl shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItem.length === 0 ? (
        <p className="text-neutral-500 text-center py-10 text-lg">
          no cart item found
        </p>
      ) : (
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 border border-neutral-200 rounded-full bg-white">
                  <img className="h-8 w-8" src={item.image} alt={item.name} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-neutral-500 line-clamp-1 max-w-xs">
                    ${item.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="btn btn-ghost text-error hover:bg-error/10 hover:text-error rounded-full btn-circle"
                >
                  <LucideTrash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-extrabold text-primary">
                ${cartItem.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary w-full text-white rounded-full font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-lg border-none"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
