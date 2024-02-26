import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


//include images into your bundle

import warehouseGuy from "../../../img/warehouseGuy.png";


//create your first component
export const BlockThree = () => {
	return (
		<div className= "border-top border-secondary" style={{ background: '#F7F6F6'}}>
			<div className="d-flex" style={{marginLeft: '180px', marginBottom: '50px', paddingTop: '100px', paddingBottom: '100px' }}>
				<img src={warehouseGuy} width="500" />
				<div className="message" style={{ marginLeft: '50px' }}>
					<div className="first section">
						<p className="heading-one" style={{ color: '#4ca1f9', marginTop: '30px' }}>SCALABILITY</p>
						<h1 className="heading-two"
							style={{
								color: '#37465a',
								width: '400px',
								font: '100px'
							}}>
							We empower you through automation.
						</h1>
						<p className="pitch" style={{ width: '450px', color: '#37465a', marginTop: '20px' }}>
							At One Agent, we developed a solution that puts the control back in your hands.
							Our warehousing and technology allows you to focus on the final
							mile while adding value for your customers.
						</p>
					</div>
					<a href="#" className="btn"
						style={{
							background: '#5257c6',
							color: 'white',
							width: '170px',
							height: '40px',
							marginTop: '45px',
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


