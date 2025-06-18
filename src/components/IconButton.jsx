"use client";
import "./IconButton.css";
import ClientOnly from "./ClientOnly";

export default function IconButton({
  icon,
  onClick,
  ariaLabel,
  size,
  style = {},
  noPadding = false, // ← new prop
}) {
  return (
    <ClientOnly>
      <button
        onClick={onClick}
        aria-label={ariaLabel}
        className="icon-button"
        style={{
          width: size,
          height: size,
          padding: noPadding ? 0 : undefined, // ← conditional padding override
          ...style,
        }}
      >
        {icon}
      </button>
    </ClientOnly>
  );
}
