import useText from '../../hooks/useText';
import Title from '../Title/Title';
import './skills.css';

function Skills () {
	const text = useText();

	return (
		<section id={text.headerLinks[2].toLowerCase().replace(' ', '-')} className="skills-container">
			<Title title={text.headerLinks[2]} withCloud={true} />
			{
				text.skills.map((s, i) => {
					return (
						<div key={i} className="skill">
							<h3 className="skill-name">{s.name}</h3>
							<div className="skill-level">{s.level}</div>
						</div>
					);
				})
			}
		</section>
	);
}

export default Skills;