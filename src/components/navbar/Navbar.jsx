import React from "react";
import {
  ShoppingBagIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <header className="p-5  flex justify-between">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="#" className="navbar-start font-bold text-3xl">
            Shop
          </a>
        </div>

        <div className="flex justify-center items-center gap-8">
          <label htmlFor="themeToggle" className="swap swap-rotate">
            <input type="checkbox" id="themeToggle" />
            <MoonIcon className="swap-off w-9 text-black" />
            <SunIcon className="swap-on w-9 text-black" />
          </label>

          <ShoppingBagIcon className="w-9 pb-1" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
