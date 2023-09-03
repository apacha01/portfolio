import './presentation.css';
import useText from '../../hooks/useText';
import { useEffect, useState } from 'react';

function Presentation () {
	console.log('rendered');
	const text = useText();
	const [pres, setPres] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setPres(text.presentation?.substring(0, pres.length + 1));
		}, 100);
		
	}, [pres, text.presentation]);

	return (
		<section className="presentation-container">
			<h1 className="presentation-title">{pres}</h1>
		</section>
	);

}

export default Presentation;