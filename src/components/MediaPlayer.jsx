"use client"
import "./MediaPlayer.css";
import ClientOnly from "./ClientOnly";

export default function MediaPlayer({ src, width = 480, height = 270 }) {
  return (
    <ClientOnly>
      <a href={src} target="_blank" rel="noopener noreferrer" className="media-link">
      <video
        className="media-player"
        src={src}
        width={width}
        height={height}
        autoPlay
        loop
        muted
        playsInline
      />
      </a>
    </ClientOnly>
    
  );
}
