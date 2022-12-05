import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const image = currentProject.image;
	const appLink = currentProject.deployed;
	const gitLink = currentProject. github;

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/images/${image}`)}
				className="card-image"
			/>
			<div>
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App link
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Github link
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;