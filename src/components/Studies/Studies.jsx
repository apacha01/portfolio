import './studies.css';
import Title from '../Title/Title';
import useText from '../../hooks/useText';
import MARIO_FLAGPOLE_TOP from '../../assets/svgs/mario-flagpole-top-sprite.svg';
import MARIO_FLAGPOLE_BOTTOM from '../../assets/svgs/mario-flagpole-bottom-sprite.svg';
import Study from '../Study/Study';

function Studies() {
	const text = useText();

	return (
		<section id={text.headerLinks.studies.id} className="studies-section">
			<Title title={text.headerLinks.studies.title} withCloud={true} />
			<div className="studies-container">
				{
					text.studies.map((e,i) => {
						return (<Study key={i} study={e} withFlag={true} />);
					})
				}
				<div className="mario-flagpole">
					<img className='flagpole-top' src={MARIO_FLAGPOLE_TOP} alt="Flagpole top" />
					<img className='flagpole-bottom' src={MARIO_FLAGPOLE_BOTTOM} alt="Flagpole top" />
				</div>
			</div>
			<div className="studies-floor"></div>
		</section>
	);
}

export default Studies;