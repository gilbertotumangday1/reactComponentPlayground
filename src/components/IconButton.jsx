"use client";
import "./IconButton.css";
import ClientOnly from "./ClientOnly";

export default function IconButton({ icon, onClick, ariaLabel, size, style = {} }){
    return(
        <ClientOnly>
            <button
                onClick = {onClick}
                aria-label={ariaLabel}
                className="icon-button"
                style={{width: size, height: size, ...style}}
            >
                {icon}
            </button>
        </ClientOnly>
        
    );
}
