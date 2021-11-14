import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6 grip gap-4">
        <img src={Logo} width="34" height="34" />
        <span className="text-white font-semibold text-lg">
          Cendol Bergoyang
        </span>
      </div>
      <div className="flex flex-row text-white font-semibold gap-x-16 text-2xl">
        <h3>Bipolar Early Detection</h3>
      </div>
    </nav>
  );
};

export default Navbar;
