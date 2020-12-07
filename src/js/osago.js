import "core-js/stable";
import Inputmask from "inputmask";
// Osago
(() => {
	let selector = document.querySelector(".js-carNumber");
	if (selector) {

		let letters = "[А,В,Е,К,М,Н,О,Р,С,Т,У,Х,A,B,E,K,M,H,O,P,C,T,Y,X]";
		let handlerOsago = document.querySelector(".js-insapp-osago");
		let placeholder = document.querySelector(".insapp-form__placeholder");
		let value;
		if (selector.value.length != 0) {
			selector.classList.add("insapp-focus");
		}
		let im = new Inputmask({
			regex: `${letters}{1}[0-9]{3}${letters}{2} [0-9]{2,3}`,
			casing: "upper",
			// placeholder: "А000АА 000",
			placeholder: "",
			onincomplete: function () {
				if (this.value.length != 0) {
					this.classList.add("insapp-focus");
				}
			},
			oncomplete: function () {
				this.classList.add("insapp-focus");
			},
			oncleared: function () {
				this.classList.remove("insapp-focus");
			},
			onBeforePaste: function (pastedValue, opts) {
				var processedValue = pastedValue;

				//do something with it
				selector.classList.add("insapp-focus");
				placeholder.value = pastedValue;
				return processedValue;
			}
		});
		let im2 = new Inputmask({
			regex: `${letters}{1}[0-9]{3}${letters}{2} [0-9]{3}`,
			casing: "upper",
			placeholder: "А000АА 000",
			// placeholder: "",

		});
		im.mask(selector);
		im2.mask(placeholder);
		// handler

		selector.addEventListener("input", function () {
			value = this.value.replace(/\s+/g, "");

			console.log(this.value)

			if (this.value.length != 0) {

				placeholder.value = this.value;
			}
			else {
				placeholder.value = "А000АА 000";
			}
		});


		handlerOsago.addEventListener("click", function () {
			this.setAttribute("href", `https://www.insapp.ru/calculator-osago/?ref=sdfasdfasd&preset={"insuranceCar":{"transport":{"registration_number":"${value}"}}}`);
		});
	}
})();
