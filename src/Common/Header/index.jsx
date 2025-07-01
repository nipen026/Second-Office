import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const services = [
    "Bookkeeping & Accounting",
    "Tax Services",
    "Business Owner's Package",
    "Mergers & Acquisitions",
    "Business Consulting",
    "Payroll Solutions",
    "CFO Services",
    "Startup Advisory",
    "Entity Structuring",
    "Audit Support",
    "Financial Planning",
    "See All Services",
  ];

  const [showServices, setShowServices] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation()

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-primary font-extrabold text-xl">⚖️ CA Finance</span>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-6 max-w-md">
            <input
              type="text"
              placeholder="Search services, articles..."
              className="w-full border border-gray-300 bg-white text-primary rounded-2xl px-3 py-1 text-sm focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/"  className={location.pathname == '/' ? "text-primary font-bold underline" : "text-secondary hover:text-primary"}>Home</a>

            {/* Services Dropdown with hover handler */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="text-secondary">Services ▾</button>
              {showServices && (
                <div className="absolute left-0 top-full pt-2 w-[600px] bg-white rounded shadow-lg z-50 text-sm p-4">
                  <div className="grid grid-cols-3 gap-0">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="px-3 py-2 hover:bg-gray-100 text-primary block"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-secondary hover:text-primary">About</a>
            <a href="#" className="text-secondary hover:text-primary">Blog</a>
            <a href="#" className="text-secondary hover:text-primary">Contact</a>
          </nav>

          {/* Login Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
          >
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-medium">
              Sign In ▾
            </button>
            {showLogin && (
              <div className="absolute right-0 pt-2 text-primary w-44 bg-white rounded shadow-lg z-50 text-sm">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Client Login</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team Login</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
