import React from "react";
import images from "../../img/images.png";
import PropTypes from "prop-types";
const Card = (props) => {
	return (
		<div className="card">
			<img src={images} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
};

export default Card;
