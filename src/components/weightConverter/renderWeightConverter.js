import { SetupConverter } from "./weightConverter.js";

export function renderWeightConverter() {
	document.querySelector("#app").insertAdjacentHTML(
		"beforeend",
		`
        <section class="m-4 p-4 grid bg-base-200 justify-items-center text-center">
            <fieldset class="fieldset border bg-base-300 max-w-[360px] rounded-[1vh] my-[1rem] p-[2rem] text-2xl">
                <legend class="fieldset-legend">Kilogram - Gram átalakítás</legend>
                <label class="input validator">
                <input type="number" name="converter-input" class="js-converter-input" min="0" max="100" step="0.00001" title="Írd be a lemért súlyt kilogramban" placeholder="Kilogram" />
                <span class="label">KG</span>
                </label>
                <p class="validator-hint">0 és 100 kilogram közötti számot adj meg</p>
                <p class="js-converter-result"></p>
            </fieldset>
        </section>`
	);

	const converterInput = document.querySelector(".js-converter-input");
	const converterResult = document.querySelector(".js-converter-result");

	SetupConverter(converterInput, converterResult);
}
