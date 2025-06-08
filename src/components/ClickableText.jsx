"use client"
import "./ClickableText.css";
import ClientOnly from "./ClientOnly";

export default function ClickableText({ children, href = "#", style = {}}){
    return(
        <ClientOnly>
            <a 
                href = {href}
                className = "clickable-text"
                style = {style}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </ClientOnly>
    );
}