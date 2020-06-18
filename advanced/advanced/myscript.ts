$(document).ready(function () {

	class Vehicles {
		public brand: string = '';
		public model: string = '';
		public price: number = 0;
		public horsepower: number = 0;
		
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

	class Motor extends Vehicles{
		public engine: string = '';
		constructor(brand: string, model: string, price: number, horsepower: number, engine: string) {
			super(brand, model, price, horsepower)	
			this.engine = engine;
		};
		printEngine() {
			return `I am ${this.engine} powered.`
		};
	};


	class Truck extends Motor{
		public truck: boolean = false;
		constructor(brand: string, model: string, price: number, horsepower: number, engine: string, truck: boolean) {
			super(brand, model, price, horsepower, engine)	
			this.truck = truck;
		};
		printTruck() {
			let type: string = '';
			if (this.truck) {
				type = 'Truck';
			}
			else {
				type = 'Car';
			}
			return `I am a ${type}.`
		};
	};


	let car = new Truck('Tesla', '3', 89000, 240, 'Electro', false);
	let truck = new Motor('Cyber', 'large', 19000, 140, 'Spiritus');

	$('body').append(`<div class="Truck"><h1>TRUCKS</h1></div><div class="Car"><h1>CARS</h1></div>`);
	$('.Car').append(`<div class = "carBrand"></div>`);
	$('.Car').append(`<div class = "carSpecs"></div>`);
	$('.Car').append(`<div class = "carType"></div>`);
	$('.Car').append(`<div class = "carEngine"></div>`);
	$('.Car').append(`<div class = "carEngineType"></div>`);
	
	$('.Car').on('click', function () {
		$('.carBrand').html(`<div><h2>${car.brand}</h2></div>`);
	});

	$('.carBrand').on('click', function () {
		$('.carSpecs').html(`${car.printSpecs()}`);
		$('.carType').html(`${car.printTruck()}`);
		$('.carEngine').html(`<div><h3>Engine:</h3></div>`);
	});

	$('.carEngine').on('click', function () {
		$('.carEngineType').html(`${car.printEngine()}`);
	});

	
});
