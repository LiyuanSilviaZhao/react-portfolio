import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src="https://static.vecteezy.com/system/resources/previews/003/815/991/original/female-programmer-doing-software-coding-free-vector.jpg"
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am Liyuan Zhao. 
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit
                    iis praesentium voluptatum deleniti atque corrupti quos dolores et quas moles
                    tias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum 
                    quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta 
                    nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor repellendus.
			
				</p>
			</div>
		</section>
	);
}

export default About;