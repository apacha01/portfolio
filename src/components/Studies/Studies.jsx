import './studies.css';
import Title from '../Title/Title';
import useText from '../../hooks/useText';
import MARIO_FLAGPOLE_TOP from '../../assets/svgs/mario-flagpole-top-sprite.svg';
import MARIO_FLAGPOLE_BOTTOM from '../../assets/svgs/mario-flagpole-bottom-sprite.svg';
import MARIO_FLAG from '../../assets/svgs/mario-flag-sprite.svg';

function Studies() {
	const text = useText();

	return (
		<section id={text.headerLinks.studies.id} className="studies-section">
			<Title title={text.headerLinks.studies.title} withCloud={true} />
			<div className="studies-container">
				{
					text.studies.map((e,i) => {
						return (
							<div key={i} className="study-container">
								<div className="study-media-container">
									<img
										className='study-img'
										src={e.img}
										alt={`Image logo of the ${e.institution} institution`}
									/>
								</div>
								<div className="study-text-container">
									<h4 className="study-degree">* {e.degree}</h4>
									<span className="study-time">* {e.timeSpend}</span>
									<p className="study-institution">* {e.institution}</p>
									<p className="study-location">* {e.location}</p>
								</div>
								<img src={MARIO_FLAG} alt="Mario flag" className="study-flag" />
							</div>
						);
					})
				}
				<div className="mario-flagpole">
					<img className='flagpole-top' src={MARIO_FLAGPOLE_TOP} alt="Flagpole top" />
					<img className='flagpole-bottom' src={MARIO_FLAGPOLE_BOTTOM} alt="Flagpole top" />
				</div>
			</div>
		</section>
	);
}

export default Studies;