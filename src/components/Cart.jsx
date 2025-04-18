import React from "react";

const Cart = ({ cartItems, setCart, setIsCartOpen }) => {
  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div
      className="
        absolute top-18 left-2 right-2 bg-white shadow-2xl rounded-lg w-auto max-w-full min-h-66 z-20 flex flex-col
        md:top-28 md:left-auto md:right-30 md:w-sm
      "
    >
      <p className="px-5 pt-4 pb-6 font-bold">Cart</p>
      <hr className="border-b border-light-grayish-blue" />
      <div className="flex flex-col justify-center items-center flex-grow">
        {cartItems.length === 0 ? (
          <p className="text-dark-grayish-blue font-bold">
            Your cart is empty.
          </p>
        ) : (
          <div className="px-5">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 mb-6"
              >
                <img
                  src={item.imageSrc}
                  alt={`The image of ${item.name}`}
                  className="w-15 h-15 rounded-md"
                />
                <div className="leading-7">
                  <p className="text-dark-grayish-blue">{item.name}</p>
                  <div className="text-dark-grayish-blue">
                    <p>
                      ${item.price.toFixed(2)} x {item.quantity} &nbsp;
                      <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  aria-label="Remove an item from cart"
                  className="cursor-pointer"
                >
                  <img src="/images/icon-delete.svg" alt="Delete button" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="py-3 w-full bg-orange rounded-lg font-bold cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
