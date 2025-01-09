"use client";


import Link from "next/link";
import React, { useState } from "react";
import { Facebook, Instagram, Linkedin,} from "lucide-react"; // Importing lucide-react icons
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiThreadsFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <GiHamburgerMenu width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}/>
      {/* <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      /> */}
      {open && (
        <div className="absolute bg-black text-white left-0 top-9rem w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-5 text-xl z-40">
          {/* Menu Links */}
          <Link href="/">Home</Link>
          <Link href="/">News</Link>
          <Link href="/">Attend</Link>
          <Link href="/">Conference</Link>
          <Link href="/">Festivals</Link>
          <Link href="/">Awards</Link>
          <Link href="/">Exhibitions</Link>
          <Link href="/">Marketing at MARCO-2025</Link>
          <Link href="/">Iconic Moments</Link>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500"
            >
              <RiThreadsFill size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;