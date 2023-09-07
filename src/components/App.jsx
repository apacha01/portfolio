import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Presentation from './Presentation/Presentation.jsx';
import Projects from './Projects/Projects.jsx';
import Socials from './Socials/Socials.jsx';
import './app.css';

function App() {
	return (
		<>
			<MarioHeader />
			<div className="body-container">
				<Presentation/>
				<Socials/>
				<Projects/>
			</div>
		</>
	);
}

export default App;
