import React from 'react';

/*
	Spinner is located in `./spinner` directory.
	Place it in `public/media` of your project to
	use it.
*/

export function Spinner() {
	return (
		<div className='loading-spinner-div'>
			<img className='loading-spinner'
				src="media/spinner/spinner.gif"
				style={{ width: '5em', margin: 'auto', display: 'block' }}
				alt="Loading…"
			/>
		</div>
	);
}
