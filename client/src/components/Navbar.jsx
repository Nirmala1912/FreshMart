import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        🌱 FreshMart
      </h1>

      <div className="flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">Categories</a>

        <div className="flex items-center bg-white rounded-md px-2">
          <input
            type="text"
            placeholder="Search vegetables..."
            className="outline-none text-black px-2 py-1"
          />
          <IoSearch className="text-black" />
        </div>

        <FaShoppingCart size={22} />
        <FaUser size={22} />
      </div>
    </nav>
  );
}

export default Navbar;