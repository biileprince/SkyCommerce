// ProductItem.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-square bg-sky-50 rounded-xl overflow-hidden relative">
        <img
          className="w-full h-full  transition-transform duration-500 group-hover:scale-105 object-contain"
          src={image[0]}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-medium text-sky-800 line-clamp-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-sky-600">
            {currency}
            {price}
          </span>
          <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm">
            Quick View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
