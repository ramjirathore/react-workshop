import React from 'react';
import Card from '../Card/Card';

import './Landing.css';

const Landing = () => {
	return (
		<div className="Landing">
			<div className="Landing-cards">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Landing;
