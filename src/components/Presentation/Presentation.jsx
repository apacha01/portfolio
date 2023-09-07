import './presentation.css';
import useText from '../../hooks/useText';
import useTypewriter from '../../hooks/useTypewriter';

function Presentation ({ speed = 100 }) {
	const text = useText();
	const { typewriting } = useTypewriter(text.presentation, speed);

	return (
		<section id="home" className="presentation-container">
			<h1 className="presentation-title">{typewriting}</h1>
		</section>
	);

}

export default Presentation;