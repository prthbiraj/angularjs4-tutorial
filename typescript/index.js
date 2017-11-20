"use strict";
// Variable Type
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function testVariable() {
    var num = 100;
    console.log("Number " + num);
    var str = 'String';
    console.log("String " + str);
    var boo = true;
    console.log("Boolean " + boo);
}
testVariable();
//Object Type
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
function testObject() {
    //litral type
    var students = { rollNo: 101, studName: 'Krishna' };
    console.log("Roll No " + students.rollNo + " Name " + students.studName);
    //object type
    var students1 = new Student();
    students1.rollNo = 102;
    students1.studName = 'Ganga Putra';
    students1.address = 'Hastina Pur';
    console.log("Roll No " + students1.rollNo + " Name " + students1.studName + " \n    Address " + students1.address);
}
testObject();
//Array Type
var x;
x = ['prabhat', 101];
//x = [10 , 'prabhat']
console.log(x);
// optional type
var val;
val = 10;
console.log(val);
val = 'Prabhat';
console.log(val);
val = true;
console.log(val);
//functions
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello('Prabhat');
//sayHello(1) error
//with return type
function sayHi(name) {
    return "Hello " + name;
}
console.log(sayHi('Pune'));
//void type and optional param
function sayGreet(name) {
    console.log("Hello " + name);
}
sayGreet();
//
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
function getCustoer() {
    var cust = [
        { id: 10, name: 'Prabhat' },
        { id: 11, name: 'Ashish' },
        { id: 12, name: 'Abhisek' }
    ];
    return cust;
}
getCustoer().forEach(function (cust) {
    return console.log("Customer Id: " + cust.id + " Name : " + cust.name + " ");
});
function getEmpolyee() {
    var emps = [
        { id: 10, name: 'Prabhat' },
        { id: 11, name: 'Ashish' },
        { id: 12, name: 'Abhisek' }
    ];
    return emps;
}
getEmpolyee().forEach(function (emp) {
    return console.log("Employee Id " + emp.id + " Name " + emp.name);
});
var Flight = /** @class */ (function () {
    function Flight() {
    }
    Flight.prototype.run = function () {
        console.log('Flight is running...');
    };
    Flight.prototype.fly = function () {
        console.log('Flight is Flying');
    };
    return Flight;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Bird is Flying");
    };
    return Bird;
}());
function creatFlightandBird() {
    var flying;
    flying = new Flight();
    flying.fly();
    //flying.run(); cant call run
    flying = new Bird();
    flying.fly();
}
creatFlightandBird();
//Encapsulation
//public or global Variable
var publicVal = 'Public Variable';
function testPublic() {
    console.log("Public Value inside function " + publicVal);
}
testPublic();
console.log("Public Value outside function " + publicVal);
//private or local variable
var PrivateVariable = /** @class */ (function () {
    function PrivateVariable(name) {
        this.name = name;
    }
    PrivateVariable.prototype.getName = function () {
        return "Private Varialbe " + this.name;
    };
    return PrivateVariable;
}());
var obj = new PrivateVariable('Prabhat');
console.log(obj.getName());
// Abstract Class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("Can Walk...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.talk = function () {
        console.log('Dog Bark');
    };
    //overrid
    Dog.prototype.walk = function () {
        console.log('Dog Walk');
    };
    return Dog;
}(Animal));
var dog;
dog = new Dog();
dog.talk();
dog.walk();
//Generics
/* Functions */
function checkType(arg) {
    return arg;
}
function TestGenericsFun() {
    var genricVal;
    genricVal = checkType('Prabhat');
    console.log("Generic Variable " + genricVal + " and type " + typeof genricVal);
    genricVal = checkType(101);
    console.log("Generic Variable " + genricVal + " and type " + typeof genricVal);
}
TestGenericsFun();
/* Class */
var UserGenerics = /** @class */ (function () {
    function UserGenerics(zeroValue) {
    }
    return UserGenerics;
}());
function testUserGenericsClass() {
    var obj = new UserGenerics(0);
    obj.add = function (x, y) { return x + y; };
}
testUserGenericsClass();
