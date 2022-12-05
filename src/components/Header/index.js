import React from "react";
import Navbar from "../Navbar";

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header className="header">
			<div className="title">
				<h1>Liyuan Silvia Zhao </h1>
			</div>
			<div className="navbar">
				<Navbar
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navbar>
			</div>
		</header>
	);
}

export default Header;