import useText from '../../hooks/useText';
import useLang from '../../contexts/langStore';
import Presentation from '../Presentation/Presentation';
import Socials from '../Socials/Socials';
import Toggler from '../Toggler/Toggler';
import FLAG_US from '../../assets/imgs/flag-us.png';
import FLAG_ARG from '../../assets/imgs/flag-arg.png';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import './hero.css';

function Hero () {
	const toggleLang = useLang(state => state.toggleLang);
	const text = useText();

	return (
		<section id={text.headerLinks.home.id} className='hero-section'>
			<div className="togglers-container">
				<Toggler
					id='lang-toggle'
					onToggle={toggleLang}
					LeftIcon={FLAG_US}
					leftAlt='US Flag'
					RightIcon={FLAG_ARG}
					rightAlt='Argentinian Flag'
				/>
				<Toggler
					id='theme-toggle'
					onToggle={toggleLang}
					LeftIcon={SunIcon}
					RightIcon={MoonIcon}
				/>
			</div>
			<Presentation />
			<Socials />
		</section>
	);
}

export default Hero;