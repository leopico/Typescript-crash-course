//Basic Type
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, 3, "hello", true];

//Tuple -> specified which array data type
let person: [number, string, boolean] = [1, "hello", false];

//Tuple array
let employee: [number, string][];
employee = [
    [1, 'hello'],
    [2,'world'],
    [3,'hi there'],
]

//Union
let pid: string | number = 22;
pid = "22";
pid = 23;

//Enum with number
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// console.log(Direction.Up);

//Enum with string
enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = 'Right',
}
// console.log(Direction1.Left);

//Object
type User = {
    id: number,
    name:string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
customerId = 3;
// console.log(customerId);

// Funtions
function addName(x:number, y:number): number {
    return x + y;
}
// console.log(addName(1,4));

// void funciton
function log(message: string | number): void {
    // console.log(message);
}
// log('hello world!');

// Interfaces
interface Userinterface  {
    readonly id: number,
    name: string
    age?: number, //this ? is optional
}

const user1: Userinterface = {
    id: 1,
    name: 'John'
}

// user1.id = 3; can not assign because this variable is readonly property

// type
type Point = number | string
const p1: Point = 1;


//interface function
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(add(2, 3));

//Classes
class Person {
    protected id: number
    name: string

    constructor(id:number, name:string) {
        // console.log(123); can run inside constructor as special assign
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}
const brad = new Person(1,"brad");
const mike = new Person(2, 'mike');
// console.log(brad,mike);
// brad.id = 5; //can not take value for brad because id is private or protected and can call inside the class or extend the class
// console.log(brad,mike);
// console.log(brad.register());
// console.log(mike.register());


//Implementaion the interface to the Classes
interface PersonInterface  {
    id: number,
    name: string
    register(): string
}
class Maker implements PersonInterface {
    id: number
    name: string

    constructor(id:number, name:string) {
        // console.log(123); can run inside constructor as special assign
        this.id = id,
        this.name = name
    }
     register() {
    //     return 1 can not assign because register is support to return the string
        return `${this.name} is now registered.`
    }
}
const mikle = new Maker(1,"brad");
const shink = new Maker(2, 'mike');

// extend class from Maker
class Employee extends Maker {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Shawn', "Developer");
// console.log(emp.register()); that extend form Maker

//Generics
function getArray<T>(items: T[]): T[] { //<T> this is called  type or placeholder
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5,]);
let stringArray = getArray<string>(["brad","John","Jalil"]);
numArray.push(1);
stringArray.push("hello");
// console.log(numArray);
// console.log(stringArray);




















