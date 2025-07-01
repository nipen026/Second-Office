import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary h-auto text-white pt-20 px-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">⚖️ CA Finance</h2>
          <p className="text-sm text-gray-300">
            Professional financial services and solutions for businesses and
            individuals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-xl">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">About Us</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Our Services</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Case Studies</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-2 text-xl">Services</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Tax Planning</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Audit Services</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Financial Advisory</a></li>
            <li className="hover:text-white transition-all ease-in font-semibold"><a href="#">Risk Management</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="space-y-3">
          <h3 className="font-semibold mb-2 text-xl">Connect With Us</h3>
          <div className="flex  items-center gap-3 mb-4">
            <a href="#" className="border rounded-full border-white p-2 text-white hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="border rounded-full border-white p-2 text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="border rounded-full border-white p-2 text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="border rounded-full border-white p-2 text-white hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm mb-2 text-gray-300">
            Subscribe to our newsletter for updates
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 bg-white rounded-l-md text-sm text-gray-900"
            />
            <button className="bg-white text-primary px-4 py-2 text-sm font-semibold rounded-r-md hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 mt-10 border-gray-700" />

      <p className="py-6 text-center text-sm text-gray-400">
        © 2024 CA Finance. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
