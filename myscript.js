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
    var Person = /** @class */ (function () {
        function Person(firstName, lastName, jobTitle, age) {
            this.firstName = '';
            this.lastName = '';
            this.jobTitle = '';
            this.age = 0;
            this.firstName = firstName;
            this.lastName = lastName;
            this.jobTitle = jobTitle;
            this.age = age;
        }
        Person.prototype.whoAmI = function () {
            return "Hello there, My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old and I am " + this.jobTitle;
        };
        ;
        return Person;
    }());
    ;
    var human = new Person('Tronald', 'Dump', 'an Idiot', 125);
    $('body').append("<div>" + human.whoAmI() + "<hr>" + human.firstName + "</div>");
    var employee = /** @class */ (function (_super) {
        __extends(employee, _super);
        function employee(firstName, lastName, jobTitle, age, salary, jobLocation) {
            var _this = _super.call(this, firstName, lastName, jobTitle, age) || this;
            _this.salary = 0;
            _this.jobLocation = '';
            _this.salary = salary;
            _this.jobLocation = jobLocation;
            return _this;
        }
        ;
        employee.prototype.myWork = function () {
            return "I work in " + this.jobLocation + " and I earn " + this.salary + " Dollars";
        };
        return employee;
    }(Person));
    ;
    var slave = new employee('Barack', 'Obama', 'a President', 99, 1000000, 'USA');
    $('body').append("<hr><p>" + slave.whoAmI() + "</p><p>" + slave.myWork() + "</p>");
    // ---------------------------
    var boss = /** @class */ (function (_super) {
        __extends(boss, _super);
        function boss(firstName, lastName, jobTitle, age, salary, jobLocation, leads) {
            var _this = _super.call(this, firstName, lastName, jobTitle, age, salary, jobLocation) || this;
            _this.leads = 0;
            _this.leads = leads;
            return _this;
        }
        ;
        boss.prototype.leading = function () {
            return "I lead " + this.leads + " People";
        };
        return boss;
    }(employee));
    ;
    var homer = new boss('Homer', 'Simpson', 'a Father', 54, 29, 'Springfield', 5);
    $('body').append("<hr><p>" + homer.whoAmI() + "</p><p>" + homer.myWork() + "</p><p>" + homer.leading());
});
