import './about.css';
import useText from '../../hooks/useText';
import useTheme from '../../contexts/themeStore';
import Title from '../Title/Title';
import BushSprite from '../Sprites/BushSprite';
import TubeSprite from '../Sprites/TubeSprite';
import CustomIcon from '../Icons/CustomIcon';

function About() {
	const theme = useTheme(s => s.theme);
	const text = useText();

	return (
		<section id={text.headerLinks.about.id} className="about-section">
			<Title title={text.headerLinks.about.title} withCloud={true} />
			<div className="about-container">
				<h3 className="about-title">{text.about.title}</h3>
				<div className="about-bush-container">
					<BushSprite classes="bush"/>
					<BushSprite classes="bush"/>
				</div>
				<div className="about-text-container">
					<div className="text-overlay"></div>
					<p className="about-text">{text.about.text}</p>
				</div>
			</div>
			<div className="hobbies-container">
				<h3 className="hobbies-title">Hobbies</h3>
				<div className="hobbies-hobbie">
					{
						text.about.hobbies.map((h, i) => {
							return (
								<div key={i} className="hobbie-container">
									<div className="hobbie">
										<CustomIcon path={h.icon} classes='hobbie-icon' />
										<p className="hobbie-text">{h.name}</p>
									</div>
									<TubeSprite theme={theme} />
									<div className="hobbie-floor"></div>
								</div>
							);
						})
					}
				</div>
			</div>
		</section>
	);
}

export default About;