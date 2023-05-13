import { Button } from "./Button.jsx"
import { Add, Subtract, Multiply, Divide } from "./Operators.jsx";

import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
	return (
		<div className="container text-centre">
			<div className="row">
				<div className="col">
					<h1 className="header">Calculator</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Button 
						label="+"
					/>
					<Button 
						label="-"
					/>
					<Button 
						label="x"
					/>
					<Button 
						label="÷"
					/>
				</div>
			</div>
		</div>
	)
}