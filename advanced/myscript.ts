$(document).ready(function () {

	class Vehicles {
		public brand: string = '';
		public model: string = '';
		public price: number = 0;
		public horsepower: number = 0;
		public engine: string = '';

		constructor(brand: string, model: string, price: number, horsepower: number) {
			this.brand = brand;
			this.model = model;
			this.price = price;
			this.horsepower = horsepower;
		}
		printBrand() {
			return `This model is named ${this.brand}`;
		};
			
		printSpecs() {
			return `<ul>
						<li>Model: ${this.model}</li>
						<li>Price: ${this.price} Dollars</li>
						<li>Horsepower: ${this.horsepower} PS</li>
					</ul>`;
		};
	};
	let car = new Vehicles('Tesla', '3', 89000, 240,);

	$('body').append(`<div class="brand"><h1>${car.brand}</h1></div>`);

	$('.brand').on('click', function () {
		$('.brand').append(`${car.printSpecs()}`);

	});




});