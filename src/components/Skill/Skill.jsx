import './skill.css';

function Skill ({name = '', level = 0}) {

	const generateStars = (num) => {
		let stars = [];

		for (let i = 5; i > 0; i--) {
			stars.push(<span key={i} className={`star ${i > num ? '' : 'bright'}`}></span>);
		}

		return stars;
	};

	return (
		<div className="skill-container">
			<div className="skill">
				<h3 className="skill-name">{name}</h3>
				<div className="skill-level">{generateStars(level)}</div>
			</div>
			<div className="skill-floor"></div>
		</div>
	);
}

export default Skill;