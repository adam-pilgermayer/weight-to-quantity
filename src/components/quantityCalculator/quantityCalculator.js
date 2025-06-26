import Big from "big.js";
Big.DP = 5;
Big.RM = 1;

export function SetupCalculator(
	calculatorElement,
	subQtyInpElement,
	subWeightInpElement,
	singleUnitResElement,
	totalWeightInpElement,
	totalQtyResElement
) {
	const minQty = 0;
	const maxQty = 1000;

	const minWeight = 0;
	const maxWeight = 100000;

	let subQuantity = new Big(0);
	let subWeight = new Big(0);
	let singleUnitWeight = new Big(0);
	let totalWeight = new Big(0);
	let totalQuantity = new Big(0);

	const isInputValid = (element, min, max) => {
		if (!element.value || element.value <= min || element.value > max) {
			return false;
		}
		return true;
	};

	const setSingleUnitWeight = (newSubQtyValue, newSubWeightValue) => {
		if (
			!isInputValid(subQtyInpElement, minQty, maxQty) ||
			!isInputValid(subWeightInpElement, minWeight, maxWeight)
		) {
			singleUnitResElement.innerHTML = ``;
			return;
		}

		subQuantity = newSubQtyValue;
		subWeight = newSubWeightValue;
		singleUnitWeight = subWeight.div(subQuantity);

		singleUnitResElement.innerHTML = `${singleUnitWeight} Gram`;
	};

	const setTotalQuantityValue = (newTotalWeightValue) => {
		if (
			!isInputValid(totalWeightInpElement, minWeight, maxWeight) ||
			singleUnitWeight <= 0
		) {
			totalQtyResElement.innerHTML = ``;
			return;
		}

		totalWeight = newTotalWeightValue;
		totalQuantity = totalWeight.div(singleUnitWeight);
		totalQtyResElement.innerHTML = `${
			totalQuantity < 1 ? "Hibás érték!" : `${totalQuantity} darab`
		}`;
	};

	calculatorElement.addEventListener("input", () => {
		if (
			!isInputValid(subQtyInpElement, minQty, maxQty) ||
			!isInputValid(subWeightInpElement, minWeight, maxWeight)
		) {
			singleUnitResElement.innerHTML = ``;
			return;
		}

		setSingleUnitWeight(
			new Big(subQtyInpElement.value),
			new Big(subWeightInpElement.value)
		);
	});

	calculatorElement.addEventListener("input", () => {
		if (
			!isInputValid(subQtyInpElement, minQty, maxQty) ||
			!isInputValid(subWeightInpElement, minWeight, maxWeight) ||
			!isInputValid(totalWeightInpElement, minWeight, maxWeight) ||
			singleUnitWeight <= 0
		) {
			totalQtyResElement.innerHTML = ``;
			return;
		}

		setTotalQuantityValue(new Big(totalWeightInpElement.value));
	});
}
