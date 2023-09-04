import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Presentation from './Presentation/Presentation.jsx';
import Socials from './Socials/Socials.jsx';
import './app.css';

function App() {
	return (
		<>
			<MarioHeader />
			<div className="body-container">
				<Presentation/>
				<Socials/>
			</div>
		</>
	);
}

export default App;
