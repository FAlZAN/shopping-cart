import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import getTotalItemsInCart from "../../util/getTotalItemsInCart";

function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const totalItemsInCart = getTotalItemsInCart(cart);

  return (
    <header className="flex">
      <div className="navbar bg-base-100 p-5 border-b-2 border-gray-200qq">
        <div className="flex-1">
          <Link to="/" className="navbar-start font-bold text-3xl">
            StopNShop
          </Link>
        </div>

        <div>
          <Link to="/cart" className="indicator">
            {totalItemsInCart > 0 && (
              <span className="indicator-item badge badge-neutral badge-sm">
                {totalItemsInCart}
              </span>
            )}
            <ShoppingBagIcon className="w-9 pb-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
