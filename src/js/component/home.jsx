import React from "react";

//include images into your bundle
import warehouseImage from "../../img/WHM.png";
import oneAgent from "../../img/oneagent logo 2024.png";

//create your first component
const Home = () => {
	return (
		<div className="body" style={{ background: "#1e1e1e", height: "700px" }}>
			<nav className="container navbar bg-body-tertiary" style={{ background: "#1e1e1e" }}>
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src={oneAgent} alt="Bootstrap" width="200" height="86" style={{ marginLeft: '95px' }} />
					</a>
				</div>
			</nav>
			<div className="d-flex" style={{ marginLeft: '180px', marginTop: '50px' }}>
				<img src={warehouseImage} width="600" />
				<div className="message" style={{ marginLeft: '50px' }}>
					<div className="first section">
						<p className="heading-one" style={{ color: '#4ca1f9' }}>WAREHOUSING, CUSTOMER PORTAL AND BROKERAGE IN ONE</p>
						<h1 className="heading-two"
							style={{
								color: 'white',
								width: '350px',
								font: '100px'
							}}>
							Turn key courier solution
						</h1>
						<p className="pitch" style={{ width: '450px', color: 'white', font: '12px', fontWeight: '300', marginTop: '20px' }}>
							At One Agent, we developed a solution that puts the control
							back in your hands. Our warehousing and technology
							allows you to focus on the final mile while adding value for
							your customers.
						</p>
					</div>
					<a href="#" className="btn"
						style={{
							background: '#5257c6',
							color: 'white',
							width: '170px',
							height: '40px',
							marginTop: '30px',
							borderRadius: '2px',
							boxShadow: '0 1px 3px rgba(1,1,1,0.5)'
						}}>
						Contact Us
					</a>
				</div>
			</div>


		</div>

	);
};

export default Home;
