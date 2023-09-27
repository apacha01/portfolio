import { useState } from 'react';
import ShellSprite from '../Sprites/ShellSprite';
import './toggler.css';

function Toggler({ theme = 'light', id = 'toggle', onToggle = () => { }, LeftIcon = '', RightIcon = '', leftAlt, rightAlt }) {
	const [checked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(c => !c);
		onToggle();
	};

	return (
		<div className="toggler">
			{
				typeof LeftIcon === 'string'
					? <img src={LeftIcon} alt={leftAlt} className="icon left-icon" />
					: <LeftIcon classes="icon left-icon" />
			}
			{
				typeof RightIcon === 'string'
					? <img src={RightIcon} alt={rightAlt} className="icon right-icon" />
					: <RightIcon classes="icon right-icon" />
			}
			<div className="toggle-container">
				<input
					type="checkbox"
					id={id}
					className="toggle-input"
					checked={checked}
					onChange={handleToggle}
				/>
				<label htmlFor={id} className="toggle-label">
					<ShellSprite theme={theme} classes={`${checked ? 'checked ' : ''}label-shell`} />
				</label>
			</div>
			<div className="toggle-floor"></div>
		</div>
	);
}

export default Toggler;