import './project.css';

function Project ({project, hitted}) {
	return (
		<div className={`project ${hitted ? 'hit' : ''}`}>
			<div className={`project-container ${hitted ? 'hit' : ''}`}>
				<h3 className="project-title">{project.title}</h3>
				<p className="project-description">{project.description}</p>
				<img className="project-img" src={project.img} alt={project.title}/>
				<div className="project-technologies">
					{
						project.technologies.map((t,i) => {
							return (
								<div key={i} className="project-tech">
									{t}
								</div>
							);
						})
					}
				</div>
				<div className="project-btns-container">
					<a className="repo-btn" href={project.repo} target='_blank' rel="noreferrer">Repo</a>
					<a className="demo-btn" href={project.deploy} target='_blank' rel="noreferrer">Demo</a>
				</div>
			</div>
		</div>
	);
}

export default Project;