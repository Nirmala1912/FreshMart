import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          🌱 FreshMart
        </Link>

        {/* Delivery Location */}
        <div className="hidden md:block text-white">
          <p className="text-xs">
            Delivery in 10 minutes
          </p>
          <h3 className="font-bold">
            Chennai, Tamil Nadu
          </h3>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 text-white font-semibold">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>

          <Link to="/products" className="hover:text-green-200">
            Products
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white rounded-lg px-3 py-2 w-[350px]">
          <IoSearch className="text-gray-500 text-xl" />

          <input
            type="text"
            placeholder="Search vegetables, fruits..."
            className="ml-2 w-full outline-none text-black"
          />
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="flex items-center gap-2 text-white font-semibold hover:text-green-200"
        >
          <FaUser />
          Login
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-900 transition"
        >
          <FaShoppingCart />
          Cart
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;