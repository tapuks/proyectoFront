import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Login } from "../component/Login";

export const Home = () => (
	<div className="container mt-5">
		<div className="row">
			<div className="offset-3 col-6 offset-3">
				<Login />
			</div>
		</div>
	</div>
);
