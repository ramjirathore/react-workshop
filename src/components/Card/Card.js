import React from 'react';
import first from '../../assets/places/1.jpg';
import './Card.css';

const Card = () => {
	return (
		<div className="Card">
			<img src={first} id="main-img" alt="container image" />
			<div id="Typography">
				<div>Japan</div>
				<button className="Like">Like</button>
				<p>1</p>
			</div>
		</div>
	);
};

export default Card;
