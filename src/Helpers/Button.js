import React from "react";
const Button = (props) => {
    return (
        <div>
          <button onClick={props.onClick} className={`py-2.5 px-2  hover:opacity-75 ${props.className}`} type={props.type}>{props.title}</button>
        </div>
    )
}
export default Button