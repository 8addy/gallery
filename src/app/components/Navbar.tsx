import React from "react";
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl m-auto p-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
            className="text-white text-lg font-semibold text-center"
          >
            Images Gallery
          </Link>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
