import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand navbar__name mb-0 h1">IRRIDESK</span>
			</Link>
		</nav>
	);
};
