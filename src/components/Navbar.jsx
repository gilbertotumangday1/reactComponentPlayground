'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heading } from '@/components/Text';
import ClickableText from '@/components/ClickableText';
import { HamburgerIcon } from '@/components/TechnicalIcons';
import './Navbar.css';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { href: '/website/about', label: 'About' },
    { href: '/website/experience', label: 'Experience' },
    { href: '/website/projects', label: 'Projects' },
    { href: '/website/gallery', label: 'Gallery' },
    { href: '/website/blog', label: 'Blog' },
    { href: '/resume.pdf', label: 'Resume', target: '_blank' },
  ];

  // Function to check if the current item is active
  const isCurrentPage = (href) => {
    // For resume PDF, never consider it current since it opens in new tab
    if (href === '/resume.pdf') return false;
    // Check if it matches the current pathname
    return pathname === href;
  };

  // Style for selected page
  const getSelectedStyle = (isActive) => {
    if (!isActive) return {};
    return {
      color: '#00BCD4',
      textShadow: '1px 1px 2px #00BCD4',
    };
  };

  return (
    <nav className="navbar">
      {/* Name on the left */}
      <Link href="../../" className="navbar-name">
        <Heading className="navbar-heading">Gilberto Tumangday</Heading>
      </Link>

      {/* Desktop Navigation */}
      <div className="navbar-links desktop-only">
        {menuItems.map((item) => (
          <div key={item.href}>
            <ClickableText 
              href={item.href} 
              target={item.target}
              style={getSelectedStyle(isCurrentPage(item.href))}
            >
              {item.label}
            </ClickableText>
          </div>
        ))}
      </div>

      {/* Mobile Hamburger with Dropdown */}
      <div className="mobile-menu-container" ref={dropdownRef}>
        <div className="mobile-only">
          <HamburgerIcon size={32} onClick={toggleDropdown} />
        </div>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {menuItems.map((item) => (
              <div key={item.href}>
                <ClickableText 
                  href={item.href} 
                  target={item.target}
                  onClick={() => setIsDropdownOpen(false)}
                  style={{ 
                    display: 'block', 
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    ...getSelectedStyle(isCurrentPage(item.href))
                  }}
                >
                  {item.label}
                </ClickableText>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
