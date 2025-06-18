'use client';

import Link from 'next/link';
import { Heading } from '@/components/Text';
import ClickableText from '@/components/ClickableText';
import { HamburgerIcon } from '@/components/TechnicalIcons';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Name on the left */}
      <Link href="/website" className="navbar-name">
        <Heading className="navbar-heading">Gilberto Tumangday</Heading>
      </Link>

      {/* Desktop Navigation */}
      <div className="navbar-links desktop-only">
        <ClickableText href="/website/about">About</ClickableText>
        <ClickableText href="/website/projects">Projects</ClickableText>
        <ClickableText href="/website/gallery">Gallery</ClickableText>
        <ClickableText href="/website/blog">Blog</ClickableText>
        <ClickableText href="/resume.pdf" target="_blank">Resume</ClickableText>
      </div>

      {/* Mobile Hamburger */}
      <div className="mobile-only">
        <HamburgerIcon size={32} />
      </div>
    </nav>
  );
}
