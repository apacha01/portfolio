import useText from '../../hooks/useText';
import useLang from '../../contexts/langStore';
import useTheme from '../../contexts/themeStore';
import Presentation from '../Presentation/Presentation';
import Socials from '../Socials/Socials';
import Toggler from '../Toggler/Toggler';
import FLAG_US from '../../assets/imgs/flag-us.png';
import FLAG_ARG from '../../assets/imgs/flag-arg.png';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import './hero.css';

function Hero() {
	const toggleLang = useLang(state => state.toggleLang);
	const toggleTheme = useTheme(state => state.toggleTheme);
	const theme = useTheme(state => state.theme);
	const text = useText();

	return (
		<section id={text.headerLinks.home.id} className='hero-section'>
			<div className="togglers-container">
				<Toggler
					theme={theme}
					id='lang-toggle'
					onToggle={toggleLang}
					LeftIcon={FLAG_US}
					leftAlt='US Flag'
					RightIcon={FLAG_ARG}
					rightAlt='Argentinian Flag'
				/>
				<Toggler
					theme={theme}
					id='theme-toggle'
					onToggle={toggleTheme}
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