//import css style
"use client"
import "./Button.css"

//main component function
export default function Button({type = "primary", disabled = false, children, onClick }){
    //
    const classNames = ["button", type, disabled ? "disabled" : ""].filter(Boolean).join(" ")

    return(
        <button className={classNames} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}