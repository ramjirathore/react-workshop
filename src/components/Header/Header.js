import React from 'react';
import insta from '../../assets/icons/instagram.svg';
import './Header.css';

const Header = () => {
	return (
		<div className="Header">
			<img src={insta} id="icon" alt="insta icon" />
			TravelDash
		</div>
	);
};

export default Header;
