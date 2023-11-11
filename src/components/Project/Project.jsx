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
				<div className="project-img-tech-container">
					<img className="project-img" src={currentProject.img} alt={currentProject.title} />
					<ul className="project-technologies">
						{
							currentProject.technologies.map((t, i) => {
								return (
									<li key={i} className="project-tech">
										{t}
									</li>
								);
							})
						}
					</ul>
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