import "./Avatar.css";
import ClientOnly from "./ClientOnly";

export default function Avatar({ src, alt = "Avatar", size = 96 }) {
  return (
    <ClientOnly>
      <div
        className="avatar"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img src={src} alt={alt} className="avatar-image" />
      </div>  
    </ClientOnly>
    
  );
}
