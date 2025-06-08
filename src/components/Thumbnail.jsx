"use client"
import "./Thumbnail.css";
import ClientOnly from "./ClientOnly";

export default function Thumbnail({ src, alt = "Thumbnail", width = 300 }) {
  return (
    <ClientOnly>
      <a href={src} target="_blank" rel="noopener noreferrer" className="thumbnail-link">
      <div className="thumbnail" style={{ width: `${width}px` }}>
        <img src={src} alt={alt} className="thumbnail-image" />
      </div>
      </a>
    </ClientOnly>
  );
}
