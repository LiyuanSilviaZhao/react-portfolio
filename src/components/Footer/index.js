import React from "react";
import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
                <FaLinkedinIn />  
				</a>
			</div>
			<div>
				<a
					href="https://www.github.com"
					target="_blank"
					rel="noopener noreferrer"
				>
				<AiFillGithub />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
                <AiOutlineTwitter />    
				</a>
			</div>
		</footer>
	);
}

export default Footer;