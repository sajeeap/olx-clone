import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/OLX-logo.png";
import sell from "../assets/Group.png";
import { CiSearch } from 'react-icons/ci';
import { FaChevronDown } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';

const Header = () => {
  const { user , logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
    {/* Navbar */}
    <div className="p-4 fixed w-full flex items-center justify-between bg-gray-100 gap-2 z-50">
      {/* Logo */}
      <img
        onClick={handleClick}
        src={logo}
        alt="olx-logo"
        className="h-7 sm:h-10 cursor-pointer"
      />

      {/* Location Input */}
      <div className="hidden sm:flex items-center border-2 border-solid border-black bg-white px-2 py-2 sm:py-3 rounded gap-2">
        <CiSearch size={25} />
        <input
          type="text"
          placeholder="India"
          className="outline-none text-xs sm:text-base"
        />
        <FaChevronDown />
      </div>

      {/* Main Search Bar */}
      <div className="hidden sm:flex items-center border-2 border-solid border-gray-900 bg-white rounded w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-[800px]">
        <input
          type="text"
          className="h-10 sm:h-12 w-full outline-none text-xs sm:text-base"
          placeholder="Find Cars, Mobile Phones and more..."
        />
        <div className="h-10 sm:h-12 w-10 sm:w-14 bg-gray-800 flex justify-center items-center">
          <CiSearch className="text-2xl text-white" />
        </div>
      </div>

      {/* Language and User Info */}
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <p>English</p>
        <FaChevronDown size={16} />
      </div>

      {/* Login/Logout Button */}
      {user ? (
        <>
          <p className="hidden sm:block">{user.displayName}</p>
          <button onClick={logOut} className="text-xs sm:text-sm">
            Logout
          </button>
        </>
      ) : (
        <Link className="underline font-semibold text-xs sm:text-sm" to="/login">
          Login
        </Link>
      )}

      {/* Sell Button */}
      <div
        onClick={() => navigate("/sell")}
        className="h-8 sm:h-10 w-24 sm:w-32 sell flex justify-center items-center rounded-3xl shadow-2xl cursor-pointer"
        style={{
          backgroundImage: `url(${sell})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="cursor-pointer h-[80%] sm:h-[82%] w-[86%] bg-white rounded-3xl flex items-center justify-center gap-1">
          <TiPlus />
          <span className="font-bold text-xs sm:text-base">SELL</span>
        </div>
      </div>
    </div>

    {/* Categories Bar (hidden on small screens) */}
    <div className="pt-20 hidden md:block">
      <div className="flex justify-center gap-3 items-center py-2 border-t-2 border-b-2 text-xs sm:text-sm">
        <span className="text-black hover:text-blue-700">Cars</span>
        <span className="text-black hover:text-blue-700">Motorcycles</span>
        <span className="text-black hover:text-blue-700">Mobile Phones</span>
        <span className="text-black hover:text-blue-700">House & Apartments</span>
        <span className="text-black hover:text-blue-700">Scooters</span>
        <span className="text-black hover:text-blue-700">Commercial Vehicles</span>
        <span className="text-black hover:text-blue-700">House & Apartments</span>
      </div>
    </div>

    {/* Mobile View Search Bar (Visible only on small screens) */}
    <div className="flex sm:hidden items-center justify-between bg-gray-100 px-4 py-2 border-b-2">
      <div className="flex items-center border-2 border-gray-300 rounded px-2 py-1 w-full">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm"
        />
        <CiSearch className="text-xl" />
      </div>
    </div>
  </>
  )
}

export default Header
