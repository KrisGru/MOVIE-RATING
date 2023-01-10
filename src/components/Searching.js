import React from "react";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searching = ({ handleFetch }) => {
	const [input, setInput] = useState("");
	return (
		<div className='searching'>
			<a href='./' className='searching__link'>
				<img src={logo} className='searching__image' alt='logo' />
			</a>
			<input
				className='searching__input'
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder='search title'
				onKeyPress={event => {
					if (event.key === "Enter") {
						handleFetch(input);
						setInput("");
					}
				}}
			/>
			<button
				className='btn btnSearch'
				onClick={() => {
					handleFetch(input);
					setInput("");
				}}>
				<BsSearch />
			</button>
			<button className='btn'>LOG IN</button>
			<button className='btn'>REGISTER</button>
		</div>
	);
};

export default Searching;
