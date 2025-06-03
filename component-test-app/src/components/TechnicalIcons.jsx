"use client";
import { Menu, FolderKanban, PenLine } from "lucide-react";
import "./TechnicalIcons.css";

// Hamburger (menu) icon
export function HamburgerIcon({ size, onClick, style = {} }) {
  return (
    <div className="tech-icon" onClick={onClick}>
        <Menu
            size={size}
            style={{ cursor: "pointer", ...style }}
        />
    </div>
  );
}

// Projects icon with optional label
export function ProjectsIcon({ size, showLabel = false, style = {} }) {
  return (
    <div className="tech-icon">
      <FolderKanban size={size} />
      {showLabel && <span></span>}
    </div>
  );
}

// Blog icon with optional label
export function BlogIcon({ size, showLabel = false, style = {} }) {
  return (
    <div className="tech-icon">
      <PenLine size={size} />
      {showLabel && <span></span>}
    </div>
  );
}
