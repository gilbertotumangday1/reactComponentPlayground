"use client";
import "./IconButton.css";
export default function IconButton({ icon, onClick, ariaLabel, size, style = {} }){
    return(
        <button
            onClick = {onClick}
            aria-label={ariaLabel}
            className="icon-button"
            style={{width: size, height: size, ...style}}
        >
            {icon}
        </button>
    );
}
