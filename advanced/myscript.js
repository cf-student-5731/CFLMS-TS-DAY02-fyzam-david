$(document).ready(function () {
    var Vehicles = /** @class */ (function () {
        function Vehicles(brand, model, price, horsepower) {
            this.brand = '';
            this.model = '';
            this.price = 0;
            this.horsepower = 0;
            this.engine = '';
            this.brand = brand;
            this.model = model;
            this.price = price;
            this.horsepower = horsepower;
        }
        Vehicles.prototype.printBrand = function () {
            return "This model is named " + this.brand;
        };
        ;
        Vehicles.prototype.printSpecs = function () {
            return "<ul>\n\t\t\t\t\t\t<li>Model: " + this.model + "</li>\n\t\t\t\t\t\t<li>Price: " + this.price + " Dollars</li>\n\t\t\t\t\t\t<li>Horsepower: " + this.horsepower + " PS</li>\n\t\t\t\t\t</ul>";
        };
        ;
        return Vehicles;
    }());
    ;
    var car = new Vehicles('Tesla', '3', 89000, 240);
    $('body').append("<div class=\"brand\"><h1>" + car.brand + "</h1></div>");
    $('.brand').on('click', function () {
        $('.brand').append("" + car.printSpecs());
    });
});
