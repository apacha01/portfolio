import useText from '../../hooks/useText';
import Presentation from '../Presentation/Presentation';
import Socials from '../Socials/Socials';
import './hero.css';

function Hero () {
	const text = useText();

	return (
		<section id={text.headerLinks.home.id} className='hero-section'>
			<Presentation />
			<Socials />
		</section>
	);
}

export default Hero;