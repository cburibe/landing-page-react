import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import PropTypes from "prop-types";

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */

//create your first component
const Home = (props) => {
	return (
		<div>
			<Navbar
				primero="Start Bootstrap"
				segundo="Home"
				tercero="About"
				cuarto="Services"
				quinto="Contact"
			/>
			<div className="container pb-4">
				<Jumbotron
					title="Custom jumbotron"
					description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
					button="Example buttom"
				/>
				<div className="row">
					<div className="col">
						<Card
							title="Card title"
							description="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Go somewhere"
						/>
					</div>
					<div className="col">
						<Card
							title="Card title"
							description="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Go somewhere"
						/>
					</div>
					<div className="col">
						<Card
							title="Card title"
							description="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Go somewhere"
						/>
					</div>
					<div className="col">
						<Card
							title="Card title"
							description="Some quick example text to build on the card title and make up the bulk of the cards content."
							button="Go somewhere"
						/>
					</div>
				</div>
			</div>
			<footer className="footer mt-auto py-3 bg-dark">
				<div className="container">
					<p className="text-center">
						<span className="text-muted">{props.footerBlack}</span>
					</p>
				</div>
			</footer>
		</div>
	);
};
Home.propTypes = {
	footerBlack: PropTypes.string,
};

export default Home;
