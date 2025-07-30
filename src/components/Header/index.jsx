import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [searchValue, setSearchValue] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <header className="bg-green-500 mb-9">
      <nav className="h-20 container mx-auto px-5 flex items-center text-white">
        <div className="flex-1">
          <h2 className="text-2xl">LOGOO</h2>
        </div>
        <div className="flex items-center border p-3 rounded-4xl">
          <input
            type="text"
            placeholder="Search…"
            className="outline-0 placeholder:text-[20px] text-[20px] max-sm:hidden"
            onChange={(e) => handleSearch(e)}
          />
          <IoSearchOutline className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
