import './projects.css';
import MARIO_IDLE from '../../assets/svgs/mario-idle.svg';
import MARIO_JUMP from '../../assets/svgs/mario-jump.svg';
import { useState } from 'react';
import useText from '../../hooks/useText';
import Project from '../Project/Project';

function Projects () {
	const projects = useText().projects;
	const [jump, setJump] = useState(false);
	const [selectedProject,  setSelectedProject] = useState(projects[0]);
	const [selectedIndex,  setSelectedIndex] = useState(0);

	const makeJump = () => {
		setJump(true);
		setTimeout(() => {
			setJump(false);
		}, 200);
	};

	const selectNewProject = (next = true) => {
		if (next) {
			const newIndex = selectedIndex < projects.length - 1
				? selectedIndex + 1
				: 0;
			setSelectedIndex(newIndex);
			setSelectedProject(projects[newIndex]);
		}
		else {
			const newIndex = selectedIndex > 0
				? selectedIndex - 1
				: projects.length - 1;
			setSelectedIndex(newIndex);
			setSelectedProject(projects[newIndex]);
		}
	};

	const handleClick = (next = true) => {
		makeJump();
		selectNewProject(next);
	};

	return (
		<section id='projects' className="projects-container">
			<Project project={selectedProject} hitted={jump}/>
			<div className="navigation">
				<button onClick={() => handleClick(false)} className="project-btn">{'<'}</button>
				<img
					src={jump ? MARIO_JUMP : MARIO_IDLE}
					alt="Mario"
					className={`mario-sprite left ${jump ? 'jump' : ''}`}
				/>
				<button onClick={() => handleClick(true)} className="project-btn">{'>'}</button>
			</div>
		</section>
	);
}

export default Projects;