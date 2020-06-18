var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var Vehicles = /** @class */ (function () {
        function Vehicles(brand, model, price, horsepower) {
            this.brand = '';
            this.model = '';
            this.price = 0;
            this.horsepower = 0;
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
    var Motor = /** @class */ (function (_super) {
        __extends(Motor, _super);
        function Motor(brand, model, price, horsepower, engine) {
            var _this = _super.call(this, brand, model, price, horsepower) || this;
            _this.engine = '';
            _this.engine = engine;
            return _this;
        }
        ;
        Motor.prototype.printEngine = function () {
            return "I am " + this.engine + " powered.";
        };
        ;
        return Motor;
    }(Vehicles));
    ;
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        function Truck(brand, model, price, horsepower, engine, truck) {
            var _this = _super.call(this, brand, model, price, horsepower, engine) || this;
            _this.truck = false;
            _this.truck = truck;
            return _this;
        }
        ;
        Truck.prototype.printTruck = function () {
            var type = '';
            if (this.truck) {
                type = 'Truck';
            }
            else {
                type = 'Car';
            }
            return "I am a " + type + ".";
        };
        ;
        return Truck;
    }(Motor));
    ;
    var car = new Truck('Tesla', '3', 89000, 240, 'Electro', false);
    var truck = new Motor('Cyber', 'large', 19000, 140, 'Spiritus');
    $('body').append("<div class=\"Truck\"><h1>TRUCKS</h1></div><div class=\"Car\"><h1>CARS</h1></div>");
    $('.Car').append("<div class = \"carBrand\"></div>");
    $('.Car').append("<div class = \"carSpecs\"></div>");
    $('.Car').append("<div class = \"carType\"></div>");
    $('.Car').append("<div class = \"carEngine\"></div>");
    $('.Car').append("<div class = \"carEngineType\"></div>");
    $('.Car').on('click', function () {
        $('.carBrand').html("<div><h2>" + car.brand + "</h2></div>");
    });
    $('.carBrand').on('click', function () {
        $('.carSpecs').html("" + car.printSpecs());
        $('.carType').html("" + car.printTruck());
        $('.carEngine').html("<div><h3>Engine:</h3></div>");
    });
    $('.carEngine').on('click', function () {
        $('.carEngineType').html("" + car.printEngine());
    });
});
