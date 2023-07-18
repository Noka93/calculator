import React, { useState } from "react";

export default function MyApp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleFirstName = (e) => {
		const value = e.target.value;
		setFirstName(value);
	};

	const handleLastName = (e) => {
		const value = e.target.value;
		setLastName(value);
	};

	const handleEmail = (e) => {
		const value = e.target.value;
		setEmail(value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		const list = { firstName, lastName, email };
		console.log(list);
	};

	return (
		<div
			style={{
				textAlign: "center",
				padding: "20px",
				margin: "20px",
				fontSize: "30px",
			}}
		>
			<input
				type="text"
				name="FirstName"
				placeholder="FirstName"
				value={firstName}
				onChange={handleFirstName}
				style={{
					width: "280px",
					height: "30px",
					borderRadius: "5px",
					fontSize: "16px",
				}}
			/>
			<br />

			<input
				type="text"
				name="LastName"
				placeholder="LastName"
				value={lastName}
				onChange={handleLastName}
				style={{
					width: "280px",
					height: "30px",
					borderRadius: "5px",
					fontSize: "16px",
				}}
			/>
			<br />

			<input
				type="email"
				name="email"
				placeholder="email"
				value={email}
				onChange={handleEmail}
				style={{
					width: "280px",
					height: "30px",
					borderRadius: "5px",
					fontSize: "16px",
				}}
			/>

			<br />

			<input
				type="submit"
				onClick={handleClick}
				style={{
					backgroundColor: "blue",
					width: "150px",
					height: "35px",
					borderRadius: "5px",
					fontSize: "16px",
					borderStyle: "none",
					color: "white",
				}}
			/>
		</div>
	);
}
