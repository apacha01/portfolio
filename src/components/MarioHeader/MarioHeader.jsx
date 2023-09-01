import './mario-header.css';
import MISTERY_BLOCK_SVG from '../../assets/mario-mistery-block.svg';
import PLAY_BUTTON_SVG from '../../assets/play.svg';

function MarioHeader() {
	return (
		<header className="header-container">
			<div className="header">
				<img className="header-play-icon" src={PLAY_BUTTON_SVG} />
				<p className="header-name">Agustin Pacheco</p>
				<button className="header-menu-btn">
					<img className="header-menu-icon" src={MISTERY_BLOCK_SVG} />
				</button>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
				<div className="header-screw"></div>
			</div>
		</header>
	);
}

export default MarioHeader;