import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import oneAgent from "../../img/oneagent logo 2024.png";

//create your first component
const Home = () => {
	return (
		<div className="body" style={{background: "black", height : "700px"}}>
			<nav className="navbar bg-body-tertiary">
				<div className="container" style={{background: "black"}}>
					<a className="navbar-brand" href="#">
						<img src={oneAgent} alt="Bootstrap" width="200" height="86"/>
					</a>
				</div>
			</nav>
			<div className="text-center">
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					Yaaaaaaasssssssss
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>
			</div>
		</div>

	);
};

export default Home;
