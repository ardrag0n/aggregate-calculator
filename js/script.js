(() => {
	// focus on input when window loads
	const mdcatInput = document.querySelector("#mdcat-input");
	mdcatInput.focus();

	// get mdcat aggregate
	const getMdcatMarks = () => {
		// get mdcat marks
		const mdcatMarks = parseInt(mdcatInput.value, 10);
		// calculate mdcat aggregate
		return parseFloat(((mdcatMarks / 200) * 50).toFixed(4));
	};

	// get FSC Marks
	const getintermediateMarks = () => {
		const intermediateMarks = parseInt(
			document.querySelector("#intermediate-input").value,
			10
		);
		return parseFloat(((intermediateMarks / 1100) * 40).toFixed(4));
	};

	// get waec aggregate
	const getmatricMarks = () => {
		const matricMarks = parseInt(
			document.querySelector("#matric-input").value,
			10
		);
		return parseFloat(((matricMarks / 1100) * 10).toFixed(4));
	};
	// get total aggregate
	const totalAgg = (mdcat, intermediate, matric) =>
		parseFloat(mdcat + intermediate + matric).toFixed(2);

	// display counting score
	const showScore = () => {
		const innerCircle = document.querySelector("#inner-circle");

		const mdcat = getMdcatMarks();
		const intermediate = getintermediateMarks();
		const matric = getmatricMarks();

		const score = totalAgg(mdcat, intermediate, matric);
		let i = 0.0;

		const increment = setInterval(() => {
			i += 1.23;
			innerCircle.innerHTML = i.toFixed(2);
			if (i >= score) {
				innerCircle.innerHTML = score;
				clearInterval(increment);
			}
		}, 25);
	};

	(() => {
		// get flipping cards
		const front = document.querySelector("#front");
		const back = document.querySelector("#back");

		// get forms
		const details = document.querySelector("#details");
		const result = document.querySelector("#result");

		// listen for submit events on details form
		details.addEventListener("submit", (e) => {
			e.preventDefault();

			// show result
			front.classList.add("at-back");
			back.classList.remove("at-back");
			result.firstElementChild.focus();
			showScore();
		});

		// listen for submit event on result form
		result.addEventListener("submit", (e) => {
			e.preventDefault();

			details.reset();
			mdcatInput.focus();
			back.classList.add("at-back");
			front.classList.remove("at-back");
		});
	})();
})();
