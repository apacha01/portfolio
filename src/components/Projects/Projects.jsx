import './projects.css';
import MARIO_IDLE from '../../assets/svgs/mario-idle.svg';
import MARIO_JUMP from '../../assets/svgs/mario-jump.svg';
import { useState } from 'react';
import useText from '../../hooks/useText';
import Project from '../Project/Project';

function Projects () {
	const projects = useText().projects;
	const [jump, setJump] = useState(false);
	const [hit, setHit] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const makeJump = () => {
		setJump(true);
		setTimeout(() => {
			setHit(true);
		}, 100);
		setTimeout(() => {
			setJump(false);
		}, 200);
		setTimeout(() => {
			setHit(false);
		}, 300);
	};

	const selectNewProject = (next = true) => {
		if (next) {
			const newIndex = selectedIndex < projects.length - 1
				? selectedIndex + 1
				: 0;
			setSelectedIndex(newIndex);
		}
		else {
			const newIndex = selectedIndex > 0
				? selectedIndex - 1
				: projects.length - 1;
			setSelectedIndex(newIndex);
		}
	};

	const handleClick = (next = true) => {
		makeJump();
		selectNewProject(next);
	};

	return (
		<section id='projects' className="projects-container">
			<Project
				projectIndex={selectedIndex}
				hitted={hit}
			/>
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