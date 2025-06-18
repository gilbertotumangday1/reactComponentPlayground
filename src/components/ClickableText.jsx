"use client";
import "./ClickableText.css";
import ClientOnly from "./ClientOnly";

export default function ClickableText({ children, href = "#", style = {}, target, ...props }) {
  return (
    <ClientOnly>
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="clickable-text"
        style={style}
        {...props}
      >
        {children}
      </a>
    </ClientOnly>
  );
}
