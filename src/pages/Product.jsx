import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="min-h-screen bg-sky-50/20"></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-6">
          <div className="aspect-square bg-sky-50 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selectedImage}
              alt={productData.name}
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {productData.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === img ? "border-sky-500" : "border-sky-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-sky-900">
            {productData.name}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 fill-current text-sky-200"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sky-600">(122 reviews)</span>
          </div>

          <p className="text-3xl font-bold text-sky-700">
            {currency}
            {productData.price}
          </p>

          <p className="text-sky-600/90 leading-relaxed">
            {productData.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-sky-900">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "bg-sky-600 text-white"
                      : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, selectedSize)}
            disabled={!selectedSize}
            className="w-full bg-sky-600 text-white py-4 rounded-full font-medium hover:bg-sky-700 transition-colors disabled:bg-sky-300 disabled:cursor-not-allowed"
          >
            {selectedSize ? "Add to Cart" : "Select Size"}
          </button>

          <div className="space-y-3 pt-6 border-t border-sky-100">
            {[
              "100% Original Products",
              "Cash on Delivery Available",
              "Easy Returns & Exchanges within 7 Days",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 text-sky-600">
                <svg
                  className="w-5 h-5 text-sky-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details & Reviews */}
      <div className="mt-20 space-y-12">
        <div className="border-b border-sky-100">
          <div className="flex gap-8">
            <button className="pb-4 border-b-2 border-sky-600 text-sky-900 font-medium">
              Product Details
            </button>
            <button className="pb-4 text-sky-500 hover:text-sky-700">
              Reviews (122)
            </button>
          </div>
        </div>

        <div className="space-y-6 text-sky-600/90">
          <p>
            Our e-commerce platform revolutionizes online shopping by combining
            cutting-edge technology with user-centric design. We prioritize
            quality assurance and customer satisfaction in every aspect of our
            operations.
          </p>
          <p>
            The global reach of our marketplace enables us to offer diverse
            products while maintaining strict quality control standards. Our
            secure payment gateway and efficient logistics network ensure a
            seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
