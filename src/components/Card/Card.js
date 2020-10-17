import React from 'react';
import './Card.css';

const Card = (props) => {
	return (
		<div className="Card">
			<img src={props.path} id="main-img" alt="container" />
			<div id="Typography">
				<div>{props.name}</div>
			</div>
		</div>
	);
};

export default Card;
