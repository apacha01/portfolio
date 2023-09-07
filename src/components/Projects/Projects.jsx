import './projects.css';
import MARIO_IDLE from '../../assets/svgs/mario-idle.svg';
import MARIO_JUMP from '../../assets/svgs/mario-jump.svg';
import { useState } from 'react';
import useText from '../../hooks/useText';

function Projects () {
	const [jump, setJump] = useState(false);
	const projects = useText().projects;

	const makeJump = () => {
		setJump(true);
		setTimeout(() => {
			setJump(false);
		}, 200);
	};

	return (
		<section className="projects-container">
			<div className="project">
				<h3>{projects[0].title}</h3>
				<p>{projects[0].description}</p>
				<img src={projects[0].img} alt={projects[0].title} style={{maxWidth:'100%'}} />
				<p>{projects[0].technologies}</p>
			</div>
			<div className="navigation">
				<button onClick={makeJump} className="project-btn prev-project">{'<'}</button>
				<img
					src={jump ? MARIO_JUMP : MARIO_IDLE}
					alt="Mario"
					className={`mario-sprite left ${jump ? 'jump' : ''}`}
				/>
				<button onClick={makeJump} className="project-btn next-project">{'>'}</button>
			</div>
		</section>
	);
}

export default Projects;