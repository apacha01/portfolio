import useText from '../../hooks/useText';
import Skill from '../Skill/Skill';
import Title from '../Title/Title';
import './skills.css';

function Skills () {
	const text = useText();

	return (
		<section id={text.headerLinks.skills.id} className="skills-section">
			<Title title={text.headerLinks.skills.title} withCloud={true} />
			<div className="skills-container">
				{
					text.skills.map((s, i) => {
						return (
							<Skill
								key={i}
								name={s.name}
								level={
								/* level between 0 & 5 */
									s.level > 5
										? 5
										: (s.level < 0 ? 0 : s.level)
								}
							/>
						);
					})
				}
			</div>
		</section>
	);
}

export default Skills;