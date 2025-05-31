import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Title
          text1="YOUR"
          text2="CART"
          className="text-3xl font-bold text-sky-800"
        />
      </div>

      {cartData.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <h3 className="text-2xl text-sky-700">Your cart is empty</h3>
          <button
            onClick={() => navigate("/collection")}
            className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id == item._id
              );

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-sky-100"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-sky-800">
                        {productData.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sky-600 font-medium">
                          {currency}
                          {productData.price}
                        </p>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                          Size: {item.size}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-sky-200 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item._id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="px-3 py-1 text-sky-600 hover:bg-sky-50 rounded-l-full"
                          >
                            -
                          </button>
                          <input
                            value={item.quantity}
                            onChange={(e) => {
                              const value = Math.max(
                                1,
                                parseInt(e.target.value) || 1
                              );
                              updateQuantity(item._id, item.size, value);
                            }}
                            className="w-12 text-center bg-transparent outline-none"
                            type="number"
                            min="1"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(
                                item._id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="px-3 py-1 text-sky-600 hover:bg-sky-50 rounded-r-full"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="text-red-500 hover:text-red-600 flex items-center gap-1"
                        >
                          <img
                            className="w-5 h-5"
                            src={assets.bin_icon}
                            alt="Remove item"
                          />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 border-t border-sky-100 pt-8">
            <CartTotal />
            <div className="flex justify-end mt-8">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-gradient-to-r from-sky-600 to-sky-500 text-white px-8 py-3 rounded-full hover:from-sky-700 hover:to-sky-600 transition-all w-full sm:w-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
