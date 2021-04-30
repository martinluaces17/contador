import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="fondo d-flex">
			<div className="box">
				<i className="far fa-clock fa-5x texto"></i>
			</div>
			<div className="box">
				<h1>{props.sexto}</h1>
			</div>
			<div className="box">
				<h1>{props.quinto}</h1>
			</div>
			<div className="box">
				<h1>{props.cuarto}</h1>
			</div>
			<div className="box">
				<h1>{props.tercero}</h1>
			</div>
			<div className="box">
				<h1>{props.segundo}</h1>
			</div>
			<div className="box">
				<h1>{props.primero}</h1>
			</div>
		</div>
	);
}
Home.propTypes = {
	sexto: PropTypes.string,
	quinto: PropTypes.string,
	cuarto: PropTypes.string,
	tercero: PropTypes.string,
	segundo: PropTypes.string,
	primero: PropTypes.string
};
