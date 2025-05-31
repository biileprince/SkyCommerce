import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ProductSkeleton } from "./LoadingSkeleton";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const bestProducts = products
        .filter((item) => item.bestseller)
        .slice(0, 5);
      setBestSeller(bestProducts);
      setLoading(false);
    }
  }, [products]); // Added products to dependency array

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Title
            text1="BEST"
            text2="SELLERS"
            className="mb-4 text-4xl font-bold"
          />
          <p className="mx-auto max-w-2xl text-lg text-sky-600/80">
            Explore our most loved products that customers can't stop buying
          </p>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSeller.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                className="hover:transform hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        {!loading && bestSeller.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-sky-200">
              View All Bestsellers
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && bestSeller.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No bestsellers found. Check back later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
