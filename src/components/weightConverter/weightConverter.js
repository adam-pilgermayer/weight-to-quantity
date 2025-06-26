import Big from "big.js";

export function SetupConverter(inpElement, resElement) {
	const minWeight = 0;
	const maxWeight = 100;

	let inpValue = new Big(0);
	let resValue = new Big(0);

	const setConvertedValue = (newInpValue) => {
		if (
			!inpElement.value ||
			inpElement.value < minWeight ||
			inpElement.value > maxWeight
		) {
			resElement.innerHTML = ``;
			return;
		}
		inpValue = newInpValue;
		resValue = inpValue.times(Big(1000)).toFixed(5);
		resElement.innerHTML = `${resValue} Gram`;
	};
	inpElement.addEventListener("input", () => {
		if (
			!inpElement.value ||
			inpElement.value < minWeight ||
			inpElement.value > maxWeight
		) {
			resElement.innerHTML = ``;
			return;
		}
		setConvertedValue(new Big(inpElement.value));
	});
}
