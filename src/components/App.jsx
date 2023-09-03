import MarioHeader from './MarioHeader/MarioHeader.jsx';
import Presentation from './Presentation/Presentation.jsx';
import './app.css';

function App() {
	return (
		<>
			<MarioHeader />
			<div className="web-body">
				<Presentation/>
			</div>
		</>
	);
}

export default App;
