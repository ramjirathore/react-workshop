import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="Footer">
			<div>Contact Us</div>
			<p>
				{'Copyright © '}
				<b>InstaDash</b> {new Date().getFullYear()}
				{'.'}
			</p>
		</div>
	);
};

export default Footer;
