import { useEffect, useState } from 'react';
import './title.css';

function Title({ title = 'Mock title', withCloud = false }) {
	const colors = ['mario-blue', 'mario-yellow', 'mario-red', 'mario-green'];
	const [lettersAmount, setLettersAmount] = useState(0);

	useEffect(() => {
		setLettersAmount(title.split('').length);
	}, [title]);

	return (
		<h2
			className={`title ${withCloud ? 'bg-cloud' : ''}`}
		>
			{
				title.split('').map((l, i) => {
					return (
						' '.localeCompare(l)
							? (
								<span
									key={i}
									className={`letter ${colors[i % colors.length]} ${lettersAmount >= 10 ? 'fsz-md' : ''}`}
								>
									{l}
								</span>
							)
							: (
								<span
									key={i}
									className={`letter ${colors[i % colors.length]} ${lettersAmount >= 10 ? 'fsz-md' : ''}`}
								>
									{/* No Break Space */}
									{'\u00A0'}
								</span>
							)
					);
				})
			}
		</h2>
	);
}

export default Title;