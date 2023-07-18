import React, { Component } from "react";
import "./calculatorApp.css";
import * as math from "mathjs";

class CalculatorApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "0",
		};
	}

	power = () => {
		this.setState((prevState) => ({
			...prevState,
			isOn:
				prevState.isOn === false
					? (prevState.isOn = true)
					: (prevState.isOn = false),
		}));
	};

	handleMulplication = (e) => {
		const value = e.target.value;
		let newValue = "";

		if (value === "x") {
			newValue = "*";
		} else {
			newValue = value;
		}

		this.setState((prevState) => ({
			value: prevState.value + newValue,
		}));
	};

	handleClear = () => {
		this.setState({
			value: "",
		});
	};

	handleEqual = () => {
		const { value } = this.state;
		const result = this.evaluateExpression(value);
		this.setState({
			value: result.toString(),
		});
	};
	handleScientificCalc = () => {
		this.setState((prevState) => ({
			showScientificCalculator: !prevState.showScientificCalculator,
		}));
	};

	handleSquareRoot = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.sqrt(number);
		this.setState({
			value: String(result),
		});
	};

	handleSin = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.sin(number);
		this.setState({
			value: String(result),
		});
	};

	handleCos = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.cos(number);
		this.setState({
			value: String(result),
		});
	};

	handleTan = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.tan(number);
		this.setState({
			value: String(result),
		});
	};

	handlePowerRaisedToTwo = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.pow(number, 2);
		this.setState({
			value: String(result),
		});
	};

	handlePowerRaisedToThree = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.pow(number, 3);
		this.setState({
			value: String(result),
		});
	};

	handleLog = () => {
		const { value } = this.state;
		const number = parseFloat(value);
		const result = Math.log10(number);
		this.setState({
			value: String(result),
		});
	};

	handlePi = () => {
		this.setState({
			value: String(Math.PI),
		});
	};

	handleClick = (e) => {
		const value = e.target.value;
		if (this.state.isOn) {
			this.setState((prevState) => ({
				value: prevState.value + value,
			}));
		} else {
			alert("Please turn on power");
		}
	};

	evaluateExpression = (expression) => {
		try {
			return math.evaluate(expression);
		} catch (error) {
			return "Error";
		}
	};

	render() {
		const { value } = this.state;

		return (
			<div className="container">
				<div className="calculator">
					<form>
						<div className="display">
							<input type="text" value={value} readOnly />
						</div>

						<div className="btn-row">
							<div className="btn">
								<input
									type="button"
									value="C"
									onClick={this.handleClear}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="log"
									onClick={this.handleLog}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="√"
									onClick={this.handleSquareRoot}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="π"
									onClick={this.handlePi}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="tan"
									onClick={this.handleTan}
								/>
							</div>
						</div>

						<div className="btn-row">
							<div className="btn-2">
								<input
									type="button"
									value="cos"
									onClick={this.handleCos}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="sin"
									onClick={this.handleSin}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="x^2"
									onClick={this.handlePowerRaisedToTwo}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="%"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="AC"
									onClick={this.power}
								/>
							</div>
						</div>

						<div className="btn-row">
							<div className="btn-2">
								<input
									type="button"
									value="x^3"
									onClick={this.handlePowerRaisedToThree}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="x"
									onClick={this.handleMulplication}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="-"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="+"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-2">
								<input
									type="button"
									value="/"
									onClick={this.handleClick}
								/>
							</div>
						</div>

						<div className="btn-row">
							<div className="btn-3">
								<input
									type="button"
									value="1"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="2"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="3"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="4"
									onClick={this.handleClick}
								/>
							</div>

							<div className="btn-3">
								<input
									type="button"
									value="5"
									onClick={this.handleClick}
								/>
							</div>
						</div>

						<div className="btn-row">
							<div className="btn-3">
								<input
									type="button"
									value="6"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="7"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="8"
									onClick={this.handleClick}
								/>
							</div>
							<div className="btn-3">
								<input
									type="button"
									value="9"
									onClick={this.handleClick}
								/>
							</div>

							<div className="btn-3">
								<input
									type="button"
									value="0"
									onClick={this.handleClick}
								/>
							</div>
						</div>

						<div className="btn-row">
							<div className="btn-4">
								<input
									type="button"
									value="="
									onClick={this.handleEqual}
								/>
							</div>
							<div className="btn-5">
								<input
									type="button"
									value="."
									onClick={this.handleClick}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CalculatorApp;
