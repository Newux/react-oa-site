import React from "react";

import oneAgent from "../../img/oneagent logo 2024.png";


export const NavBar = () => {

    return (
        <div className="body" style={{ background: "ffffff"}}>
			<nav className="bg-body-tertiary" style={{ background: "#1e1e1e", paddingTop: "10px"}}>
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src={oneAgent} alt="Bootstrap" width="200" height="86" style={{ marginLeft: '95px' }} />
					</a>
				</div>
			</nav>

        </div>
    );
};