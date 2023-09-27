import { useEffect, useState } from 'react';
import useText from '../../hooks/useText';
import './project.css';

function Project({ projectIndex, hitted = false }) {
	const projects = useText().projects;
	const [currentProject, setCurrentProject] = useState(projects[0]);

	useEffect(() => {
		setCurrentProject(projects[projectIndex]);
	}, [projects, projectIndex]);

	return (
		<div className={`project ${hitted ? 'hit' : ''}`}>
			<div className={`project-container ${hitted ? 'hit' : ''}`}>
				<h3 className="project-title">{currentProject.title}</h3>
				<p className="project-description">{currentProject.description}</p>
				<img className="project-img" src={currentProject.img} alt={currentProject.title} />
				<div className="project-technologies">
					{
						currentProject.technologies.map((t, i) => {
							return (
								<div key={i} className="project-tech">
									{t}
								</div>
							);
						})
					}
				</div>
				<div className="project-btns-container">
					{
						''.localeCompare(currentProject.repo) === 0
							? null
							: <a className="repo-btn" href={currentProject.repo} target='_blank' rel="noreferrer">Repo</a>
					}
					{
						''.localeCompare(currentProject.deploy) === 0
							? null
							: <a className="demo-btn" href={currentProject.deploy} target='_blank' rel="noreferrer">Demo</a>
					}
				</div>
			</div>
		</div>
	);
}

export default Project;