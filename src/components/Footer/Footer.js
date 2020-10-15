import React from 'react';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Codinity
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
			<br />
			All rights reserved.
		</Typography>
	);
}

const Footer = () => {
	return <div>I'm footer</div>;
};

export default Footer;
