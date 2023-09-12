import useText from '../../hooks/useText';
import Title from '../Title/Title';
import './about.css';

function About() {
	const text = useText();

	return (
		<section className="about-section">
			<Title title={text.headerLinks.about.title} withCloud={true} />
		</section>
	);
}

export default About;