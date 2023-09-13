import About from './About/About.jsx';
import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Presentation from './Presentation/Presentation.jsx';
import Projects from './Projects/Projects.jsx';
import Skills from './Skills/Skills.jsx';
import Socials from './Socials/Socials.jsx';
import Studies from './Studies/Studies.jsx';
import './app.css';

function App() {
	return (
		<>
			<MarioHeader />
			<main className="body-container">
				<Presentation />
				<Socials />
				<Projects />
				<Skills />
				<Studies />
				<About />
			</main>
		</>
	);
}

export default App;
