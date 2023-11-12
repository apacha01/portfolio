import CustomIcon from '../Icons/CustomIcon';
import './skill-cloud.css';

function SkillCloud({ name, icon }) {
	return (
		<div className="skill-cloud-container">
			<CustomIcon path={icon} classes="skill-cloud" />
		</div >
	);
}


export default SkillCloud;