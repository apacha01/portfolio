import './study.css';
import MARIO_FLAG from '../../assets/svgs/mario-flag-sprite.svg';

function Study({ study, withFlag = false }) {
	return (
		<div className="study-container">
			<div className="study-media-container">
				<img
					className='study-img'
					src={study.img}
					alt={`Image logo of the ${study.institution} institution`}
				/>
			</div>
			<div className="study-text-container">
				<h3 className="study-degree">* {study.degree}</h3>
				<span className="study-time">* {study.timeSpend}</span>
				<p className="study-institution">* {study.institution}</p>
				<p className="study-location">* {study.location}</p>
			</div>
			{
				withFlag
					? <img src={MARIO_FLAG} alt="Mario flag" className="study-flag" />
					: null
			}
		</div>
	);
}

export default Study;