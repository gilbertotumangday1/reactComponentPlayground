"use client"
import "./ClickableText.css";

export default function ClickableText({ children, href = "#", style = {}}){
    return(
        <a 
            href = {href}
            className = "clickable-text"
            style = {style}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}