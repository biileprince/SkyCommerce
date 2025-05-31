import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  // Mock order data with status
  const orders = [
    {
      ...products[1],
      status: "shipped",
      date: "2025-01-13",
      quantity: 1,
      size: "M",
    },
    {
      ...products[2],
      status: "processing",
      date: "2025-01-12",
      quantity: 2,
      size: "L",
    },
    {
      ...products[3],
      status: "delivered",
      date: "2025-01-10",
      quantity: 1,
      size: "S",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-amber-400";
      case "shipped":
        return "bg-sky-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "processing":
        return "Processing";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      default:
        return "Pending";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Title
          text1="My"
          text2="Orders"
          className="text-3xl font-bold text-sky-800"
        />
        <p className="text-sky-600 mt-2">
          View your recent purchases and order status
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <h3 className="text-2xl text-sky-700">No orders found</h3>
          <p className="text-sky-600 max-w-md mx-auto">
            You haven't placed any orders yet. Start shopping to see your orders
            here.
          </p>
          <button
            onClick={() => navigate("/collection")}
            className="bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-colors mt-4"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-sky-100"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Product Info */}
                <div className="flex items-start gap-6">
                  <img
                    className="w-20 h-20 object-cover rounded-lg border border-sky-100"
                    src={order.image[0]}
                    alt={order.name}
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-sky-800">
                      {order.name}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <p className="text-sky-600 font-medium">
                        {currency}
                        {order.price}
                      </p>
                      <p className="text-sky-600">
                        Qty:{" "}
                        <span className="font-medium">{order.quantity}</span>
                      </p>
                      <p className="text-sky-600">
                        Size: <span className="font-medium">{order.size}</span>
                      </p>
                    </div>
                    <p className="text-sky-500 text-sm">
                      Ordered: <span className="font-medium">{order.date}</span>
                    </p>
                  </div>
                </div>

                {/* Order Status */}
                <div className="flex flex-col items-start md:items-end gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    ></span>
                    <span className="font-medium text-sky-700">
                      {getStatusText(order.status)}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-sm font-medium">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
