'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import '@/components/header/navbar.css';

const Header = () => {
  const [hamBurger, setHamBurger] = useState(false);

  const toggleHamBurger = () => {
    setHamBurger(!hamBurger);
  };

  return (
    <header>
      <nav className="navbar animate-topToBottom">
        {/* Logo */}
        <Link href="/" className="logo">
          UMAIR <span className="logo-dot">.</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleHamBurger} className="hamburger-icon">
          <Menu className="menu-icon" />
        </button>

        {/* Full Navbar Links (hidden on mobile, visible on larger screens) */}
        <ul className="navbar-links">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Hire Me Button for larger screens */}
        <Link href="https://www.linkedin.com/in/umairnawaz7228/" className="hireBtn" target="_blank">
          Hire Me
        </Link>

        {/* Mobile Menu (showing on mobile screens) */}
        <div className={`mobile-menu ${hamBurger ? 'open' : ''} animate-topToBottom`}>
          <ul className="mobile-links ">
            <li><Link href="/" className="mobile-link" onClick={toggleHamBurger}>Home</Link></li>
            <li><Link href="/about" className="mobile-link" onClick={toggleHamBurger}>About</Link></li>
            <li><Link href="/gallery" className="mobile-link" onClick={toggleHamBurger}>Gallery</Link></li>
            <li><Link href="/contact" className="mobile-link" onClick={toggleHamBurger}>Contact</Link></li>
          </ul>
          <Link href="https://www.linkedin.com/in/umairnawaz7228/" className="mobile-hire-btn" target="_blank" onClick={toggleHamBurger}>
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
