import { SetupCalculator } from "./quantityCalculator.js";

export function renderQuantityCalculator() {
	document.querySelector("#app").insertAdjacentHTML(
		"beforeend",
		`
        <section class="js-calculator m-4 p-4 grid bg-base-200 justify-items-center text-center">
            <fieldset class="fieldset border bg-base-300 max-w-[360px] rounded-[1vh] my-[1rem] p-[2rem] text-2xl">
                <legend class="fieldset-legend">Egy egység súlyának kiszámítása</legend>
                <div>
                    <label class="input validator">
                        <input type="number" name="subtotal-quantity" class="js-subtotal-quantity" min="0" max="1000" title="Írd be, hogy hány egységet mértél le" placeholder="10 egység" />
                        <span class="label">EGYSÉG</span>
                    </label>
                    <p class="label text-sm">Írd be, hogy hány egységet mértél le</p>
                    <p class="validator-hint">0 és 1000 egység közötti számot adj meg</p>
                </div>
                <div>
                    <label class="input validator">
                        <input type="number" name="subtotal-weight" class="js-subtotal-weight" min="0" max="100000" step="0.00001" title="Írd be, hogy hány gram a lemért egység" placeholder="32.513 gram" />
                        <span class="label">GRAM</span>
                    </label>
                    <p class="label text-sm">Írd be, hogy hány gram a lemért egység</p>
                    <p class="validator-hint">0 és 100000 gram közötti számot adj meg</p>
                </div>
                <p class="js-single-unit-weight"></p>
            </fieldset>
            <fieldset class="fieldset border bg-base-300 max-w-[360px] rounded-[1vh] my-[1rem] p-[2rem] text-2xl">
                <legend class="fieldset-legend">Összmennyiség kiszámítása</legend>
                <div>
                    <label class="input validator">
                        <input type="number" name="total-weight" class="js-total-weight" min="0" max="100000" step="0.00001"" title="Írd be a teljes súlyt" placeholder="4064 gram" />
                        <span class="label">GRAM</span>
                    </label>
                    <p class="label text-sm">Írd be a teljes súlyt</p>
                    <p class="validator-hint">0 és 100000 gram közötti számot adj meg</p>
                </div>
               
                <p class="js-total-quantity"></p>
            </fieldset>
        </section>
        `
	);

	const subCalculatorElement = document.querySelector(".js-calculator");
	const subtotalQuantity = document.querySelector(".js-subtotal-quantity");
	const subtotalWeight = document.querySelector(".js-subtotal-weight");
	const singleUnitWeight = document.querySelector(".js-single-unit-weight");
	const totalWeight = document.querySelector(".js-total-weight");
	const totalQuantity = document.querySelector(".js-total-quantity");

	SetupCalculator(
		subCalculatorElement,
		subtotalQuantity,
		subtotalWeight,
		singleUnitWeight,
		totalWeight,
		totalQuantity
	);
}
