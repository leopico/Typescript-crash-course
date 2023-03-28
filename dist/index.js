"use strict";
//Basic Type
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, "hello", true];
//Tuple -> specified which array data type
let person = [1, "hello", false];
//Tuple array
let employee;
employee = [
    [1, 'hello'],
    [2, 'world'],
    [3, 'hi there'],
];
//Union
let pid = 22;
pid = "22";
pid = 23;
//Enum with number
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction.Up);
//Enum with string
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 3;
// console.log(customerId);
// Funtions
function addName(x, y) {
    return x + y;
}
// console.log(addName(1,4));
// void funciton
function log(message) {
    // console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// console.log(add(2, 3));
//Classes
class Person {
    constructor(id, name) {
        // console.log(123); can run inside constructor as special assign
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, "brad");
const mike = new Person(2, 'mike');
class Maker {
    constructor(id, name) {
        // console.log(123); can run inside constructor as special assign
        this.id = id,
            this.name = name;
    }
    register() {
        //     return 1 can not assign because register is support to return the string
        return `${this.name} is now registered.`;
    }
}
const mikle = new Maker(1, "brad");
const shink = new Maker(2, 'mike');
// extend class from Maker
class Employee extends Maker {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', "Developer");
// console.log(emp.register()); that extend form Maker
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5,]);
let stringArray = getArray(["brad", "John", "Jalil"]);
numArray.push(1);
stringArray.push("hello");
// console.log(numArray);
// console.log(stringArray);
