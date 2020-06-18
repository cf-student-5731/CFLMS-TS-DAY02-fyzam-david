$(document).ready(function(){

	class Person{
		public firstName: string = '';
		public lastName: string = '';
		public jobTitle: string = '';
		public age: number = 0;

		constructor(firstName: string, lastName: string, jobTitle: string, age: number) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.jobTitle = jobTitle
			this.age = age;
		}

		whoAmI() {
			return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am ${this.jobTitle}`;
		};
	};

	let human = new Person('Tronald', 'Dump', 'an Idiot', 125);
	
	$('body').append(`<div>${human.whoAmI()}<hr>${human.firstName}</div>`);

	class employee extends Person {
		public salary: number = 0;
		public jobLocation: string = '';

		constructor(firstName: string, lastName: string, jobTitle: string, age: number, salary: number, jobLocation: string) {
			super(firstName, lastName, jobTitle, age);
			this.salary = salary;
			this.jobLocation = jobLocation;
		};

		myWork() {
			return `I work in ${this.jobLocation} and I earn ${this.salary} Dollars`;
		}
	};

	let slave = new employee('Barack', 'Obama', 'a President', 99, 1000000, 'USA');

	$('body').append(`<hr><p>${slave.whoAmI()}</p><p>${slave.myWork()}</p>`);



	// ---------------------------

	class boss extends employee {
		public leads: number = 0;

		constructor(firstName: string, lastName: string, jobTitle: string, age: number, salary: number, jobLocation: string, leads: number) {
			super(firstName, lastName, jobTitle, age, salary, jobLocation);
			this.leads = leads;
		};
		leading() {
			return `I lead ${this.leads} People`;
		}
	};

	let homer = new boss('Homer', 'Simpson', 'a Father', 54, 29, 'Springfield', 5);

	$('body').append(`<hr><p>${homer.whoAmI()}</p><p>${homer.myWork()}</p><p>${homer.leading()}`);


	

});