import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Hero from './Hero/Hero.jsx';
import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import Studies from './Studies/Studies.jsx';
import './app.css';

function App() {
	return (
		<>
			<MarioHeader />
			<main className="body-container">
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
