import './title.css';

function Title ({title = 'Mock title', withCloud = false}) {
	const colors = ['mario-blue', 'mario-yellow', 'mario-red', 'mario-green'];

	return (
		<h2
			className={`title ${withCloud ? 'bg-cloud' : ''} ${title.split('').length >= 10 ? 'fsz-md' : ''}`}
		>
			{
				title.split('').map((l, i) => {
					return (
						' '.localeCompare(l)
							? (
								<span key={i} className={`letter ${colors[i % colors.length]}`}>
									{l}
								</span>
							)
							: (
								<span key={i} className={`letter ${colors[i % colors.length]}`}>
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