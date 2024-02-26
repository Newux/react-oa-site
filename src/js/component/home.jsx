import React from "react";

//include images into your bundle

import { BlockTwo } from './homepage_blocks/blockTwo.jsx';
import { BlockThree } from "./homepage_blocks/blockThree.jsx";
import { NavBar } from "./navBar.jsx";
import { BlockOne } from "./homepage_blocks/blockOne.jsx";
import { Footer } from "./footer.jsx";
import { ContactUs } from "./contact_us/contactUs.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			{/* <NavBar />
			<BlockOne />
			<BlockTwo />
			<BlockThree />
			<Footer /> */}
			<ContactUs />
		</div>

	);
};

export default Home;
