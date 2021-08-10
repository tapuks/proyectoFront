import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex">
			<Link to="/">
				<img
					className="navbar__img ml-5"
					src="https://w7.pngwing.com/pngs/732/220/png-transparent-fruit-vegetarian-cuisine-peach-scalable-graphics-icon-peach-food-cartoon-fruit.png"
				/>
				<span className="navbar-brand navbar__name mb-0 h1 ml-2">IRRIDESK</span>
			</Link>
		</nav>
	);
};
