import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Hero from './Hero/Hero.jsx';
import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import Studies from './Studies/Studies.jsx';
import './app.css';
import useTheme from '../contexts/themeStore.js';

function App() {
	const theme = useTheme(state => state.theme);

	return (
		<>
			<MarioHeader />
			<main className="body-container" data-theme={theme}>
				<Hero />
				<Projects />
				<Skills />
				<Studies />
				<About />
				<Contact />
			</main>
		</>
	);
}

export default App;
