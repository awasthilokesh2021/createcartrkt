import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state.cartdata);

  return (
    <header className="bg-slate-500 mb-2 text-white  lg:py-2 w-full">
      <nav className="z-50 flex justify-between flex-wrap w-[92%] items-center mx-auto">
        <div className=" font-bold text-2xl">React-Redux</div>
        <NavLink to="/">
          <div>All products</div>
        </NavLink>

        <div className="bg-black flex items-center rounded-full py-1 px-2">
          <NavLink to="/cart">
            <span className="text-white text-sm ">Cart-({cart.length})</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
