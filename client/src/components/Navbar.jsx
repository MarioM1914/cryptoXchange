import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, Close } from "@mui/icons-material";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef();

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, []);

  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  // outside sidebar click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

  if (isSidebarOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isSidebarOpen]);

  return (
    <nav className="mb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
            cryptoXchange
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 pl-2 md:pl-0">
          <button
            type="button"
            className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 my-2 md:my-0 text-center"
          >
            Get started
          </button>
          <div className="md:hidden flex items-center p-2">
            <MenuOutlined
              onClick={showSidebar}
              className="cursor-pointer text-white scale-150"
            />
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex md:flex-row md:mt-0 md:border-0 text-white">
            <li>
              <Link
                to="/"
                className={`block md:hover:bg-transparent md:hover:text-purple-400 ${
                  isActive("/") ? "text-purple-400" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/buy-crypto"
                className={`block md:hover:bg-transparent md:hover:text-purple-400 ${
                  isActive("/buy-crypto") ? "text-purple-400" : "text-white"
                }`}
              >
                Buy Crypto
              </Link>
            </li>
            <li>
              <Link
                to="/market"
                className={`block md:hover:bg-transparent md:hover:text-purple-400 ${
                  isActive("/market") ? "text-purple-400" : "text-white"
                }`}
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`block md:hover:bg-transparent md:hover:text-purple-400 ${
                  isActive("/news") ? "text-purple-400" : "text-white"
                }`}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/wallet"
                className={`block md:hover:bg-transparent md:hover:text-purple-400 ${
                  isActive("/wallet") ? "text-purple-400" : "text-white"
                }`}
              >
                Wallet
              </Link>
            </li>
          </ul>
        </div>
        <ul
          ref={sidebarRef}
          className={
            isSidebarOpen
              ? "md:hidden flex flex-col items-center fixed inset-0 left-1/3 justify-center gap-8 p-8 bg-black/40 backdrop-blur-lg text-white"
              : "hidden"
          }
        >
          <Close onClick={showSidebar} className="cursor-pointer scale-125" />
          <li>
            <Link
              to="/"
              className={`py-2 px-3 bg-transparent ${
                isActive("/") ? "text-purple-400" : "text-white"
              }`}
              onClick={showSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/buy-crypto"
              className={`py-2 px-3 hover:bg-transparent hover:text-purple-400 ${
                isActive("/buy-crypto") ? "text-purple-400" : "text-white"
              }`}
              onClick={showSidebar}
            >
              Buy Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/market"
              className={`py-2 px-3 hover:bg-transparent hover:text-purple-400 ${
                isActive("/market") ? "text-purple-400" : "text-white"
              }`}
              onClick={showSidebar}
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={`py-2 px-3 hover:bg-transparent hover:text-purple-400 ${
                isActive("/news") ? "text-purple-400" : "text-white"
              }`}
              onClick={showSidebar}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/wallet"
              className={`py-2 px-3 hover:bg-transparent hover:text-purple-400 ${
                isActive("/wallet") ? "text-purple-400" : "text-white"
              }`}
              onClick={showSidebar}
            >
              Wallet
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
