import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ProductSkeleton } from "./LoadingSkeleton"; // Import the skeleton
import { Link } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLatestProducts(products.slice(0, 10));
      setLoading(false);
    }, 1500); // Simulate loading delay

    return () => clearTimeout(timer);
  }, [products]);

  return (
    <section className="py-16 bg-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title
            text1="LATEST"
            text2="COLLECTION"
            className="mb-4 text-4xl font-bold"
          />
          <p className="mx-auto max-w-2xl text-lg text-sky-600/80">
            Discover our newest arrivals featuring cutting-edge designs
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          /* Loaded State */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {latestProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to={"collection"}
            className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-sky-200"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
