import React from "react";
import "../styles/Button.css";
function Button({ text, clickButton, clickHandler }) {
	return (
		<button className={clickButton ? "clickButton" : "resetButton"} onClick={clickHandler}>
			{text}
		</button>
	);
}
export default Button;
