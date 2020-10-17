import React, { Component } from 'react';
import Card from '../Card/Card';

import { places } from '../../places';

import './Landing.css';

class Landing extends Component {
	state = {
		allPlaces: [],
		showCards: 0,
		init: true
	};

	handleLoad = () => {
		this.setState((prevState) => {
			const load = prevState.showCards + 3;
			return {
				allPlaces: [...places].slice(0, load),
				showCards: load,
				init: false
			};
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="root">
				<button
					className="load"
					onClick={this.handleLoad}
					disabled={this.state.allPlaces.length === places.length}
				>
					{this.state.init ? 'Click to load' : 'Load more'}
				</button>
				<div className="Landing">
					<div className="Landing-cards">
						{this.state.allPlaces.map((place, index) => (
							<Card key={index} path={place.path} name={place.name} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
