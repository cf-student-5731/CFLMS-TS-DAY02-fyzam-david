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

	let car: any = new Array(); 
	car[0] = new Truck('Tesla', '3', 89000, 240, 'Electro', false);
	car[1] = new Truck('Honda', 'Civic', 15000, 70, 'Fuel', false);
	car[2] = new Truck('Lada', 'Samara', 2000, 40, 'Solar', false);

	let truck: any = new Array(); 
	truck[0] = new Truck('Cyber', 'large', 19000, 140, 'Spiritus', true);
	truck[1] = new Truck('Renault', 'micro', 9000, 90, 'Fuel', true);
	truck[2] = new Truck('Monster', 'mega', 90000, 810, 'Love', true);

	$('body').append(`<div class="Truck"><h1>TRUCKS</h1></div><div class="Car"><h1>CARS</h1></div>`);

	
	for (let i = 0; i < car.length; i++){
		$('.Car').append(`<div class = "carBrand_${i}"></div>`);
		$('.Car').append(`<div class = "carSpecs_${i}"></div>`);
		$('.Car').append(`<div class = "carType_${i}"></div>`);
		$('.Car').append(`<div class = "carEngine_${i}"></div>`);
		$('.Car').append(`<div class = "carEngineType_${i}"></div>`);

		$('.Car').on('click', function () {
			$(`.carBrand_${i}`).html(`<div><h2>${car[i].brand}</h2></div>`);
		});
	
		$(`.carBrand_${i}`).on('click', function () {
			$(`.carSpecs_${i}`).html(`${car[i].printSpecs()}`);
			$(`.carType_${i}`).html(`${car[i].printTruck()}`);
			$(`.carEngine_${i}`).html(`<div><h3>Engine:</h3></div>`);
		});
	
		$(`.carEngine_${i}`).on('click', function () {
			$(`.carEngineType_${i}`).html(`${car[i].printEngine()}`);
		});

	};
	

	for (let i = 0; i < truck.length; i++){
		$('.Truck').append(`<div class = "truckBrand_${i}"></div>`);
		$('.Truck').append(`<div class = "truckSpecs_${i}"></div>`);
		$('.Truck').append(`<div class = "truckType_${i}"></div>`);
		$('.Truck').append(`<div class = "truckEngine_${i}"></div>`);
		$('.Truck').append(`<div class = "truckEngineType_${i}"></div>`);

		$('.Truck').on('click', function () {
			$(`.truckBrand_${i}`).html(`<div><h2>${truck[i].brand}</h2></div>`);
		});
	
		$(`.truckBrand_${i}`).on('click', function () {
			$(`.truckSpecs_${i}`).html(`${truck[i].printSpecs()}`);
			$(`.truckType_${i}`).html(`${truck[i].printTruck()}`);
			$(`.truckEngine_${i}`).html(`<div><h3>Engine:</h3></div>`);
		});
	
		$(`.truckEngine_${i}`).on('click', function () {
			$(`.truckEngineType_${i}`).html(`${truck[i].printEngine()}`);
		});

	};
	
});
