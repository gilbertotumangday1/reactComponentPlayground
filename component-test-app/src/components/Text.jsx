"use client"
import "./Text.css";
import { useEffect, useRef } from "react";

// Animated Heading
export function Heading({ children }) {
  const fullText = `<${children}/>`;
  const spanRef = useRef(null);

  useEffect(() => {
    const charCount = fullText.length;
    const animationName = `typing-${charCount}`;

    // Access first stylesheet in the document
    const styleSheet = document.styleSheets[0];

    // Check if the keyframe rule already exists
    const existingRule = Array.from(styleSheet.cssRules).find(rule =>
      rule.name === animationName
    );

    // If not, inject a new keyframe animation dynamically
    if (!existingRule) {
      styleSheet.insertRule(`
        @keyframes ${animationName} {
          from { width: 0ch; }
          to { width: ${charCount}ch; }
        }
      `, styleSheet.cssRules.length);
    }

    // Apply the animation to the span element
    if (spanRef.current) {
      spanRef.current.style.animation = `
        ${animationName} 2s steps(${charCount}, end) forwards,
        blink 0.7s step-end infinite
      `;
    }
  }, [fullText]);

  return (
    <h1 className="heading">
      <span
        className="typing"
        ref={spanRef}
        style={{ width: "0ch" }}
      >
        {fullText}
      </span>
    </h1>
  );
}

// Static Paragraph component
export function Paragraph({ children }) {
  return <p className="paragraph">{children}</p>;
}

// Static Caption component
export function Caption({ children }) {
  return <span className="caption">{children}</span>;
}
