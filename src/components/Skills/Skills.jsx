import useText from '../../hooks/useText';
import Skill from '../Skill/Skill';
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
						<Skill key={i} name={s.name} level={s.level} />
					);
				})
			}
		</section>
	);
}

export default Skills;