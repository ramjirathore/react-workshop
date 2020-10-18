import React, { useState } from 'react';
import './Landing.css';
import Card from '../Card/Card';

import { places } from '../../places';

const Landing = () => {
	const [data, setData] = useState({
		allPlaces: [],
		showCards: 0
	});

	const handleLoad = () => {
		setData((prevState) => {
			const load = prevState.showCards + 3;
			return {
				allPlaces: [...places].slice(0, load),
				showCards: load
			};
		});
	};

	return (
		<div className="root">
			<button
				className="load"
				onClick={handleLoad}
				disabled={data.allPlaces.length === places.length}
			>
				{data.showCards === 0 ? 'Click to Load' : 'Load more'}
			</button>
			<div className="Landing Landing-cards">
				{data.allPlaces.map((place, index) => {
					return <Card key={index} name={place.name} path={place.path} />;
				})}
			</div>
		</div>
	);
};

export default Landing;
