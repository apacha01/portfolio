import useText from '../../hooks/useText';
import Skill from '../Skill/Skill';
import SkillCloud from '../SkillCloud/SkillCloud';
import Title from '../Title/Title';
import './skills.css';

function Skills() {
	const text = useText();

	return (
		<section id={text.headerLinks.skills.id} className="skills-section">
			<Title title={text.headerLinks.skills.title} withCloud={true} />
			<section className="skills-container">
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
			</section>
			<section className="future-skills-container">
				<h2 className="future-skills-title">Future Interests</h2>
				<div className="future-skills-icons">
					{
						text.futureSkills.map((s, i) => {
							return (
								<SkillCloud
									key={i}
									name={s.name}
									icon={s.icon}
								/>
							);
						})
					}
				</div>
			</section>
		</section>
	);
}

export default Skills;