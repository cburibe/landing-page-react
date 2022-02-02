import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pb-4">
				<Jumbotron />
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
			<footer className="footer mt-auto py-3 bg-dark">
				<div className="container">
					<p className="text-center">
						<span className="text-muted">
							Place sticky footer content here.
						</span>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
