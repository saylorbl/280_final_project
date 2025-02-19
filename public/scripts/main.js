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

	document.querySelector("#LakesideNorth").addEventListener("mouseover", () => {
		document.querySelector("#LakesideNorthLabel").classList.remove("invisible");
	});
	document.querySelector("#LakesideNorth").addEventListener("mouseout", () => {
		document.querySelector("#LakesideNorthLabel").classList.add("invisible");
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
