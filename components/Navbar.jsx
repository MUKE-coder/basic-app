"use client";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
  const [displayNav, setDisplayNav] = useState(false);
  function showNavigation() {
    setDisplayNav(true);
  }
  function hideNavigation() {
    setDisplayNav(false);
  }
  return (
    <header>
      <a href="#" className="logo">
        <div className="dot"></div>
        <span>JB</span>
      </a>
      <nav className={displayNav ? "showNav" : ""}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
      {displayNav ? (
        <div className="humberg-icon" onClick={hideNavigation}>
          <GrClose size={32} />
        </div>
      ) : (
        <div className="humberg-icon" onClick={showNavigation}>
          <BiMenu size={32} />
        </div>
      )}
    </header>
  );
}
