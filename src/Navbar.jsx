import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 pointer-events-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#1a3a35] font-bold text-sm">L</span>
        </div>
        <span className="text-xl font-semibold">Lauched Global</span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#personal" className="hover:text-green-300 transition-colors">
          Study Abroad
        </a>
        <a href="#business" className="hover:text-green-300 transition-colors">
          Career Launchpad
        </a>
        <a href="#feature" className="hover:text-green-300 transition-colors">
          Professional Courses
        </a>
        <a href="#company" className="hover:text-green-300 transition-colors">
          HealthCare Job
        </a>
      </div>
      {/* button */}
      <div className="flex items-center gap-4">
        <button className="text-sm hover:text-green-300 transition-colors">
          Login
        </button>
        <button className="px-6 py-2 bg-green-200 text-[#1a3a35] rounded-full text-sm font-medium hover:bg-green-300 transition-colors">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
