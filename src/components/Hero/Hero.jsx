import './hero.css';
import Presentation from '../Presentation/Presentation';
import Socials from '../Socials/Socials';
import Toggler from '../Toggler/Toggler';
import FLAG_US from '../../assets/svgs/us-flag.svg';
import FLAG_ARG from '../../assets/svgs/arg-flag.svg';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import useText from '../../hooks/useText';
import useLang from '../../contexts/langStore';
import useTheme from '../../contexts/themeStore';
import { THEME_OPTIONS } from '../../constants/theme';

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
					initialState={false}
				/>
				<Toggler
					theme={theme}
					id='theme-toggle'
					onToggle={toggleTheme}
					LeftIcon={SunIcon}
					RightIcon={MoonIcon}
					initialState={theme === THEME_OPTIONS.DARK}
				/>
			</div>
			<Presentation />
			<Socials />
		</section>
	);
}

export default Hero;