import { useState } from 'react';
import ShellSprite from '../Sprites/ShellSprite';
import './toggler.css';

function Toggler ({ theme = 'light', onToggle = () => {}, leftIcon, rightIcon, leftAlt, rightAlt }) {
	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(c => !c);
		onToggle();
	};

	return (
		<div className="toggler">
			<img src={leftIcon} alt={leftAlt} className="icon left-icon" />
			<img src={rightIcon} alt={rightAlt} className="icon right-icon" />
			<div className="toggle-container">
				<input
					type="checkbox"
					id="toggle"
					className="toggle-input"
					onClick={handleToggle}
				/>
				<label htmlFor="toggle" className="toggle-label">
					<ShellSprite theme={theme} classes={`${checked ? 'checked ' : ''}label-shell`} />
				</label>
			</div>
			<div className="toggle-floor"></div>
		</div>
	);
}

export default Toggler;