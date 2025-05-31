// Collection.jsx
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

import Title from "./../components/Title";
import ProductItem from "./../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
      setFilterProducts(productsCopy);
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-72">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="lg:hidden w-full flex items-center justify-between mb-4 text-sky-700"
            >
              <span className="font-medium">FILTERS</span>
              <img
                className={`w-4 transform transition-transform ${
                  showFilter ? "rotate-180" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Toggle filters"
              />
            </button>

            <div
              className={`${
                showFilter ? "block" : "hidden"
              } lg:block space-y-6`}
            >
              {/* Category Filter */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-sky-800">Category</h3>
                {["Men", "Women", "Kids"].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center space-x-3 p-2 hover:bg-sky-50 rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={cat}
                      checked={category.includes(cat)}
                      onChange={toggleCategory}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500"
                    />
                    <span className="text-sky-700">{cat}</span>
                  </label>
                ))}
              </div>

              {/* Subcategory Filter */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-sky-800">
                  Product Type
                </h3>
                {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-3 p-2 hover:bg-sky-50 rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      checked={subCategory.includes(type)}
                      onChange={toggleSubCategory}
                      className="w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500"
                    />
                    <span className="text-sky-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <Title text1="ALL" text2="COLLECTION" className="text-3xl" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 border border-sky-300 rounded-lg text-sky-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>

          {filterProducts.length === 0 && (
            <div className="text-center py-12 text-sky-600">
              No products found matching your criteria
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collection;
