/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Bradley Saylor, Kelvin Zhou
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.buttonSetup = function () {
	document.querySelector("#triplets").addEventListener("mouseover", () => {
		document.querySelector("#tripletsLabel").classList.remove("invisible");
	});
	document.querySelector("#triplets").addEventListener("mouseout", () => {
		document.querySelector("#tripletsLabel").classList.add("invisible");
	});

	document.querySelector("#lakesideNorth").addEventListener("mouseover", () => {
		document.querySelector("#lakesideNorthLabel").classList.remove("invisible");
	});
	document.querySelector("#lakesideNorth").addEventListener("mouseout", () => {
		document.querySelector("#lakesideNorthLabel").classList.add("invisible");
	});

	document.querySelector("#lakesideSouth").addEventListener("mouseover", () => {
		document.querySelector("#lakesideSouthLabel").classList.remove("invisible");
	});
	document.querySelector("#lakesideSouth").addEventListener("mouseout", () => {
		document.querySelector("#lakesideSouthLabel").classList.add("invisible");
	});

	document.querySelector("#percopo").addEventListener("mouseover", () => {
		document.querySelector("#percopoLabel").classList.remove("invisible");
	});
	document.querySelector("#percopo").addEventListener("mouseout", () => {
		document.querySelector("#percopoLabel").classList.add("invisible");
	});

	document.querySelector("#speed").addEventListener("mouseover", () => {
		document.querySelector("#speedLabel").classList.remove("invisible");
	});
	document.querySelector("#speed").addEventListener("mouseout", () => {
		document.querySelector("#speedLabel").classList.add("invisible");
	});

	document.querySelector("#hatfield").addEventListener("mouseover", () => {
		document.querySelector("#hatfieldLabel").classList.remove("invisible");
	});
	document.querySelector("#hatfield").addEventListener("mouseout", () => {
		document.querySelector("#hatfieldLabel").classList.add("invisible");
	});

	document.querySelector("#bic").addEventListener("mouseover", () => {
		document.querySelector("#bicLabel").classList.remove("invisible");
	});
	document.querySelector("#bic").addEventListener("mouseout", () => {
		document.querySelector("#bicLabel").classList.add("invisible");
	});

	document.querySelector("#commuter").addEventListener("mouseover", () => {
		document.querySelector("#commuterLabel").classList.remove("invisible");
	});
	document.querySelector("#commuter").addEventListener("mouseout", () => {
		document.querySelector("#commuterLabel").classList.add("invisible");
	});
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	rhit.buttonSetup();
};

rhit.main();
