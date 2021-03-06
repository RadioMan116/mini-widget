// Kasko
(() => {
	// let
	let brands = [
		"Acura",
		"Alfa Romeo",
		"Aston Martin",
		"Audi",
		"BAW",
		"Bentley",
		"BMW",
		"Brilliance",
		"Bugatti",
		"Buick",
		"BYD",
		"Cadillac",
		"Changan",
		"Changfeng",
		"Chery",
		"Cheryexeed",
		"Chevrolet",
		"Chrysler",
		"Citroen",
		"Dacia",
		"Dadi",
		"Daewoo",
		"Daihatsu",
		"Datsun",
		"Derways",
		"DFM",
		"Dodge",
		"Dongfeng",
		"Doninvest",
		"Eagle",
		"Faw",
		"Ferrari",
		"Fiat",
		"Ford",
		"Freightliner",
		"GAC",
		"Geely",
		"Genesis",
		"GEO",
		"GMC",
		"Golden Dragon",
		"Great Wall",
		"Hafei",
		"Haima",
		"HARLEY-DAVIDSON",
		"Haval",
		"HAWTAI",
		"Hino",
		"Honda",
		"HTM",
		"Huanghai",
		"Hummer",
		"Hymer",
		"Hyundai",
		"Infiniti",
		"International",
		"Iran Khodro",
		"Isuzu",
		"JAC",
		"Jaguar",
		"Jeep",
		"JMC",
		"KIA",
		"LADA",
		"Lamborghini",
		"Lancia",
		"Land Rover",
		"LANDMARK",
		"LDV",
		"LECITRAILER",
		"Lexus",
		"Lifan",
		"Lincoln",
		"Lotus",
		"Luxgen",
		"MAN",
		"Maserati",
		"Maybach",
		"Mazda",
		"Mercedes-Benz",
		"MG",
		"Mini",
		"Mitsubishi",
		"Nissan",
		"Opel",
		"OZTAS",
		"Peugeot",
		"Pontiac",
		"Porsche",
		"Ravon",
		"Renault",
		"Rolls-Royce",
		"Rover",
		"Saab",
		"Samsung",
		"Saturn",
		"Scania",
		"SCHMITZ",
		"Seat",
		"Shacman (Shaanxi)",
		"Shuanghuan",
		"Skoda",
		"Smart",
		"SsangYong",
		"Subaru",
		"Suzuki",
		"TagAZ",
		"Tesla",
		"Tianma",
		"Toyota",
		"UAZ",
		"Volga",
		"Volkswagen",
		"Volvo",
		"Vortex",
		"Wielton",
		"XinKai",
		"Yutong",
		"Zhong Tong",
		"Zotye",
		"ZX",
		"ВАЗ",
		"ВИС",
		"ГАЗ",
		"ЗАЗ",
		"ИЖ",
		"НефАЗ",
		"УАЗ"

	];
	let brandInput = document.querySelector(".js-insapp__form-brand");
	if (brandInput) {
		let handlerKasko = document.querySelector(".js-insapp-kasko");
		let value;
		let result = document.getElementById("insapp-result");
		let searchList = function () {
			let res = result,
				s = "";
			if (this.value.length != 0) {
				this.classList.add("insapp-focus");
			}
			else {
				this.classList.remove("insapp-focus");
			}
			for (let i = 0; i < brands.length; ++i)

				if (brands[i].toLowerCase().indexOf(this.value.toLowerCase()) == 0 || brands[i].toUpperCase().indexOf(this.value.toUpperCase()) == 0) {

					s += "<div class='insapp-result__item'>" + brands[i] + "</div>";
				}
			res.innerHTML = brandInput.value !== "" ? s : "";
			res.style.display = res.innerHTML !== "" ? "block" : "none";
			res.classList.contains = res.innerHTML !== "" ? res.classList.add("insapp-result-active") : res.classList.remove("insapp-result-active");
			value = this.value;
		};

		brandInput.addEventListener("input", searchList);
		brandInput.addEventListener("click", (() => {
			if (result.querySelectorAll(".insapp-result__item").length > 0) {
				result.classList.add("insapp-result-active");
				result.style.display = "block";
			}
		}));

		document.addEventListener("click", function (event) {
			let isClickInside = brandInput.contains(event.target);

			if (!isClickInside) {
				// result.classList.remove("insapp-result-active");
				result.style.display = "none";

			}
		});
		result.addEventListener("click", function (e) {

			if (e.target.classList == "insapp-result__item") {
				brandInput.value = e.target.innerHTML;
				// result.classList.remove("insapp-result-active");
				// result.style.display = "block";
				value = brandInput.value;
				// searchList();
			}
		});
		handlerKasko.addEventListener("click", function () {
			this.setAttribute("href", `https://www.insapp.ru/calculator-kasko/?ref=sdfasdfasd&preset={"insuranceCar":{"transport":{"brand":"${value}"}}}`);
		});
	}

})();