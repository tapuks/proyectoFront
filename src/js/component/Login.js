import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	var urlencoded = new URLSearchParams();
	urlencoded.append("username", userName);
	urlencoded.append("password", password);

	const login = () => {
		fetch("https://girridesk.ddns.net/api/v1/token/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: urlencoded
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				// actions.setToken(responseJson.token);
				// //Cuando llegue aqui te redirige a esa ruta
				// history.push("/profile");
			});
	};
	return (
		<div className="login">
			<div className="jumbotron ">
				<h1 className="text-center login__name">Login</h1>
				<form>
					{/* <div className="form-group">
						<label></label>
						<input type="text" className="form-control" placeholder="plataforma" />
					</div> */}
					<div className="form-group">
						<label>Nombre de usuario</label>
						<input
							type="text"
							className="form-control"
							placeholder="Usuario"
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={e => {
							e.preventDefault;
							login();
						}}>
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
};
