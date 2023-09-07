import './projects.css';
import MARIO_IDLE from '../../assets/svgs/mario-idle.svg';
import MARIO_JUMP from '../../assets/svgs/mario-jump.svg';
import { useState } from 'react';
import useText from '../../hooks/useText';
import Project from '../Project/Project';

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
		<section id='projects' className="projects-container">
			<Project project={projects[0]}/>
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