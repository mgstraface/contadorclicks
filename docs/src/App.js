/* eslint-disable no-const-assign */
import "./App.css";
import logoMati from "../src/images/logoMati.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
	const [counter, setcounter] = useState(0);

	const clickHandler = () => {
		setcounter(counter + 1);
	};
	const resetCounter = () => {
		setcounter(0);
	};

	return (
		<div className="App">
			<div className="logoMatiCont">
				<img className="logoMati" src={logoMati} alt="logo" />
			</div>
			<div className="ppalCont">
				<Counter numClics={counter} />
				<Button text="Click" clickButton={true} clickHandler={clickHandler} />
				<Button text="Reset" clickButton={false} clickHandler={resetCounter} />
			</div>
		</div>
	);
}

export default App;
