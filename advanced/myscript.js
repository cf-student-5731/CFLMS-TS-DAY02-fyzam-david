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
    var car = new Array();
    car[0] = new Truck('Tesla', '3', 89000, 240, 'Electro', false);
    car[1] = new Truck('Honda', 'Civic', 15000, 70, 'Fuel', false);
    var truck = new Array();
    truck[0] = new Truck('Cyber', 'large', 19000, 140, 'Spiritus', true);
    truck[1] = new Truck('Renault', 'micro', 9000, 90, 'Fuel', true);
    $('body').append("<div class=\"Truck\"><h1>TRUCKS</h1></div><div class=\"Car\"><h1>CARS</h1></div>");
    var _loop_1 = function (i) {
        $('.Car').append("<div class = \"carBrand_" + i + "\"></div>");
        $('.Car').append("<div class = \"carSpecs_" + i + "\"></div>");
        $('.Car').append("<div class = \"carType_" + i + "\"></div>");
        $('.Car').append("<div class = \"carEngine_" + i + "\"></div>");
        $('.Car').append("<div class = \"carEngineType_" + i + "\"></div>");
        $('.Car').on('click', function () {
            $(".carBrand_" + i).html("<div><h2>" + car[i].brand + "</h2></div>");
        });
        $(".carBrand_" + i).on('click', function () {
            $(".carSpecs_" + i).html("" + car[i].printSpecs());
            $(".carType_" + i).html("" + car[i].printTruck());
            $(".carEngine_" + i).html("<div><h3>Engine:</h3></div>");
        });
        $(".carEngine_" + i).on('click', function () {
            $(".carEngineType_" + i).html("" + car[i].printEngine());
        });
    };
    for (var i = 0; i < car.length; i++) {
        _loop_1(i);
    }
    ;
    var _loop_2 = function (i) {
        $('.Truck').append("<div class = \"truckBrand_" + i + "\"></div>");
        $('.Truck').append("<div class = \"truckSpecs_" + i + "\"></div>");
        $('.Truck').append("<div class = \"truckType_" + i + "\"></div>");
        $('.Truck').append("<div class = \"truckEngine_" + i + "\"></div>");
        $('.Truck').append("<div class = \"truckEngineType_" + i + "\"></div>");
        $('.Truck').on('click', function () {
            $(".truckBrand_" + i).html("<div><h2>" + truck[i].brand + "</h2></div>");
        });
        $(".truckBrand_" + i).on('click', function () {
            $(".truckSpecs_" + i).html("" + truck[i].printSpecs());
            $(".truckType_" + i).html("" + truck[i].printTruck());
            $(".truckEngine_" + i).html("<div><h3>Engine:</h3></div>");
        });
        $(".truckEngine_" + i).on('click', function () {
            $(".truckEngineType_" + i).html("" + truck[i].printEngine());
        });
    };
    for (var i = 0; i < car.length; i++) {
        _loop_2(i);
    }
    ;
});
