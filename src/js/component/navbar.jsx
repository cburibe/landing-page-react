import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{props.primero}
				</a>
				<div className="d=flex justify-content-end">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									{props.segundo}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.tercero}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.cuarto}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{props.quinto}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	primero: PropTypes.string,
	segundo: PropTypes.string,
	tercero: PropTypes.string,
	cuarto: PropTypes.string,
	quinto: PropTypes.string,
};

export default Navbar;
