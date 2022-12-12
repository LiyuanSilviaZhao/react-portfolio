import React, { useState } from "react";

function Project(props) {
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const image = currentProject.image;
	const appLink = currentProject.deployed;
	const gitLink = currentProject. github;
	
return (
	<div className="card">
		<img
			variant="top"
			src={require(`../../assets/images/${image}`)}
			alt=""
			className="card-image"
		/>
			<div className="card-content">
				<h4 className="card-title">{name}</h4>
				<a href={appLink} target="_blank" className="card-link">
					{name} App link
				</a>
				<a href={gitLink} target="_blank" className="card-link">
					& {name} Github link
				</a>
			</div>
	</div>
);
}
export default Project;