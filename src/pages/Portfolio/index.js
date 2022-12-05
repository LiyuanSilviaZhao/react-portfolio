import React from 'react';
import Project from '../../components/Project';

function Portfolio() {
	const projects = [
		{
			name: 'Renegade Art',
			image: 'renegadeArt.png',
			github: 'https://github.com/vicdotexe/renegade-art.git',
			deployed: 'https://renegadeart-team8.herokuapp.com/',
		},
		{
			name: 'Let us Explore!',
			image: 'Let-us-Explore.png',
			github: 'https://github.com/mattdack/hiking-app',
			deployed: 'https://mattdack.github.io/hiking-app',
		},
		{
			name: 'Note Taker',
			image: 'note-taker.png',
			github: 'https://github.com/LiyuanSilviaZhao/11-Express.js-Note-Taker',
			deployed: 'https://expressjs-note-taker1022.herokuapp.com/',
		},
		{
			name: 'Coding Quiz',
			image: 'quiz.png',
			github: 'https://github.com/LiyuanSilviaZhao/Code-Quiz--04-Web-APIs-Challenge',
			deployed: 'https://liyuansilviazhao.github.io/Code-Quiz--04-Web-APIs-Challenge/',
		},
		{
			name: 'Weather Dashboard',
			image: 'weather Dashboard.png',
			github: 'https://github.com/LiyuanSilviaZhao/06--Weather-Dashboard',
			deployed: 'https://liyuansilviazhao.github.io/06--Weather-Dashboard/',
		},
		{
			name: 'Team Profile Generator',
			image: 'team_Generator.png',
			github: 'https://github.com/LiyuanSilviaZhao/10-OOP-Team-Profile-Generator',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;