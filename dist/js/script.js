"use strict";

(function () {
	// focus on input when window loads
	var mdcatInput = document.querySelector("#mdcat-input");
	mdcatInput.focus();

	// get mdcat aggregate
	var getMdcatMarks = function getMdcatMarks() {
		// get mdcat marks
		var mdcatMarks = parseInt(mdcatInput.value, 10);
		// calculate mdcat aggregate
		return parseFloat(((mdcatMarks / 200) * 50).toFixed(4));
	};

	// get FSC Marks
	var getintermediateMarks = function getintermediateMarks() {
		var intermediateMarks = parseInt(
			document.querySelector("#intermediate-input").value,
			10
		);
		return parseFloat(((intermediateMarks / 1100) * 40).toFixed(4));
	};

	// get waec aggregate
	var getmatricMarks = function getmatricMarks() {
		var matricMarks = parseInt(
			document.querySelector("#matric-input").value,
			10
		);
		return parseFloat(((matricMarks / 1100) * 10).toFixed(4));
	};
	// get total aggregate
	var totalAgg = function totalAgg(mdcat, intermediate, matric) {
		return parseFloat(mdcat + intermediate + matric).toFixed(2);
	};

	// display counting score
	var showScore = function showScore() {
		var innerCircle = document.querySelector("#inner-circle");
		var mdcat = getMdcatMarks();
		var intermediate = getintermediateMarks();
		var matric = getmatricMarks();
		var score = totalAgg(mdcat, intermediate, matric);
		var i = 0.0;
		var increment = setInterval(function () {
			i += 1.23;
			innerCircle.innerHTML = i.toFixed(2);
			if (i >= score) {
				innerCircle.innerHTML = score;
				clearInterval(increment);
			}
		}, 25);
	};
	(function () {
		// get flipping cards
		var front = document.querySelector("#front");
		var back = document.querySelector("#back");

		// get forms
		var details = document.querySelector("#details");
		var result = document.querySelector("#result");

		// listen for submit events on details form
		details.addEventListener("submit", function (e) {
			e.preventDefault();

			// show result
			front.classList.add("at-back");
			back.classList.remove("at-back");
			result.firstElementChild.focus();
			showScore();
		});

		// listen for submit event on result form
		result.addEventListener("submit", function (e) {
			e.preventDefault();
			details.reset();
			mdcatInput.focus();
			back.classList.add("at-back");
			front.classList.remove("at-back");
		});
	})();
})();
