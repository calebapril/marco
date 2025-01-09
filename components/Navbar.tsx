import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Cart from './Cart';

function Navbar() {
  return (
    <div className='sticky top-0 z-30 h-12 text-white p-4 flex items-center justify-between uppercase bg-black'>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex items-center gap-3'>
        <Menu />
        <Link href="/">MARCO-2025</Link>
      </div>
      
      {/* RIGHT LINKS */}
      <div className="flex items-center justify-between gap-8">
        <SearchBar />
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
