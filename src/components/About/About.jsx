import useText from '../../hooks/useText';
import Title from '../Title/Title';
import './about.css';
import MARIO_SIMPLE_BUSH from '../../assets/svgs/mario-single-bush-sprite.svg';

function About() {
	const text = useText();

	return (
		<section id={text.headerLinks.about.id} className="about-section">
			<Title title={text.headerLinks.about.title} withCloud={true} />
			<div className="about-bush-container">
				<img src={MARIO_SIMPLE_BUSH} alt="Mario Bush Sprite" className="bush" />
				<img src={MARIO_SIMPLE_BUSH} alt="Mario Bush Sprite" className="bush" />
			</div>
			<div className="about-text-container">
				<div className="text-overlay"></div>
				<p className="about-text">{text.about.text}</p>
			</div>
		</section>
	);
}

export default About;