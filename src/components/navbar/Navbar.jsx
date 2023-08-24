import React, { useEffect, useState } from "react";
import {
  ShoppingBagIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="flex justify-between">
      <div className="navbar bg-base-100 p-5 border-b border-gray-200">
        <div className="flex-1">
          <Link to="/" className="navbar-start font-bold text-3xl">
            Shop
          </Link>
        </div>

        <div className="flex justify-center items-center gap-8">
          <label htmlFor="themeToggle" className="swap swap-rotate">
            <input type="checkbox" id="themeToggle" onClick={toggleTheme} />
            <MoonIcon className="swap-off w-9" />
            <SunIcon className="swap-on w-9" />
          </label>

          <Link to="/cart">
            <ShoppingBagIcon className="w-9 pb-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
