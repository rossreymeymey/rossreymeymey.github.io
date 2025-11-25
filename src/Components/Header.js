import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/profiles.jpg"; // ← your photo here

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/technologies", label: "Technologies" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Hire Me!" },
  ];

  return (
    <>
      {/* Desktop + Tablet */}
      <header className="container mx-auto px-4 py-6">
  <div className="flex items-center justify-between relative">
    
    {/* LEFT: Profile Photo + Navigation (stuck together) */}
    <div className="flex items-center gap-8 lg:gap-12">
      
      {/* Profile Photo */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-xl flex-shrink-0"
      />

      {/* Navigation - appears right after the photo, no extra space */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 lg:gap-12 text-gray-700 font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "hover:text-pink-600 transition duration-200"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</header>

      {/* Mobile Full-Screen Menu - Everything Perfectly Centered */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
          <div className="absolute top-8 left-8">
            <img
              src={profileImg}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl"
            />
          </div>

          <nav className="mb-12">
            <ul className="fbg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-pink-600 font-bold" : "hover:text-pink-600"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;