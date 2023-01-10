import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => (
	<div className='menu'>
		<ul className='menu__list'>
			<li className='menu__item'>in theaters</li>
			<li className='menu__item'>coming soon</li>
			<li className='menu__item'>charts</li>
			<li className='menu__item'>TV series</li>
			<li className='menu__item'>Trailers</li>
			<li className='menu__item'>
				More
				<IoMdArrowDropdown />
			</li>
		</ul>
	</div>
);

export default Nav;
