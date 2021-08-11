import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	var urlencoded = new URLSearchParams();
	urlencoded.append("username", userName);
	urlencoded.append("password", password);

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: urlencoded,
		redirect: "follow"
	};

	const login = () => {
		fetch("https://girridesk.ddns.net/api/v1/token/", requestOptions)
			.then(response => response.json())

			.then(responseJson => {
				console.log(responseJson);

				if (responseJson.access_token) {
					console.log(responseJson.access_token);
					alert("Login ok");
					setError(false);
				} else if (responseJson.error) {
					console.log("error");
					setError(true);
				}
			})

			.catch(error => console.log("error", error));
	};
	useEffect(() => {}, [error]);

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
					{error == true ? <p className="text-danger">Nombre de usuario o contraseña incorrecto</p> : ""}

					<button
						type="submit"
						className="btn btn-primary"
						onClick={e => {
							e.preventDefault();
							console.log(userName);
							console.log(password);
							login();
						}}>
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
};
