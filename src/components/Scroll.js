import React from 'react';

const Scroll = (props) => {

	return (
		<div style={{overflowY: 'scroll', border: '3px solid black', height: '500px', margin: '5px'}}>
			{props.children}
		</div>
	);
}

export default Scroll