import React from "react";
import Navbar from "../Navbar";

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header>
			<div class="title">
				<h2>Liyuan Silvia Zhao </h2>
			</div>
			<div>
				<Navbar
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navbar>
			</div>
		</header>
	);
}

export default Header;