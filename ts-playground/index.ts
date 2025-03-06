// Strings type // ----------------------------------------------------------------------------- //
let Name: string = "Enes";
console.log(Name + " " + typeof Name);

//Number type // ----------------------------------------------------------------------------- //
let Numbers: number = 3;
console.log(Numbers + " " + typeof Numbers);

//Boolen type // ----------------------------------------------------------------------------- //
let Boo: boolean = false;
console.log(Boo + " " + typeof Boo);

//Any type // ----------------------------------------------------------------------------- //
let Any: any = "Hello";
console.log(Any + " " + typeof Any);
Any = 20;
console.log(Any + " " + typeof Any);
Any = true;
console.log(Any + " " + typeof Any);

//Regular Functions // ----------------------------------------------------------------------------- //
function Sums(num: number) {
  return num + 1;
}
const ConsoleNum = Sums(3);
console.log(ConsoleNum);

const Double = (a: number, b: number) => {
  return a * b;
};
const ConsoleDouble = Double(3, 2);
console.log(ConsoleDouble);

const NumberWithText = (a: number, t: string) => {
  return `${t}: ` + a;
};
const numWtxt = NumberWithText(10, "price");
console.log(numWtxt);

//Default Params Value // ----------------------------------------------------------------------------- //
function greet(person: string = "Guest") {
  return `Hello ${person}`;
}
console.log(greet());
const User = greet("User");
console.log(User);

//Return Annotations (Regular) // ----------------------------------------------------------------------------- //
function double1(num: number): number {
  return num * num;
}
const db1 = double1(3);
console.log(db1 + " " + typeof db1);

// Using Arrow Functions // ----------------------------------------------------------------------------- //
const double2 = (n: number): number => n * n;
console.log(double2(2));

//Void in Typescript // ----------------------------------------------------------------------------- //
function printMessage(message: string): void {
  console.log(`This is my message ${message}`);
}
printMessage("Hello");

//Never // ----------------------------------------------------------------------------- //
// A function that always throw an error
// A function that has an infinite loop
//A function that can never have a value

/* function throwError(message: string): void {
  throw new Error(message);
}
console.log(throwError("Hey that is error")); */

// Be carefull start this code :))))

/* function loop(): never {
  while (true) {
    console.log("a");
  }
}
loop(); */

/* let x: never;

function Never(): never {
  while (true) {}
}
x = Never();
 */

//Arrays Types

//2 Types of Arrays // ----------------------------------------------------------------------------- //

//Using the square bracket notation [ ] to indicate an array of a specific type

//Using the generic Array<type> notation to indicate an array of a specific type

// Type 1
function ReturnArray(): string[] {
  const User1 = "Jack";
  const User2 = "James";
  const Data = [User1, User2];
  return Data;
}
console.log(ReturnArray());

let Type2Array: Array<number> = [1, 2, 3];
Type2Array.push(...[], 4);
console.log(Type2Array);

//Multi Dimensional // ----------------------------------------------------------------------------- //
const UserData: any[] = [
  {
    id: 1,
    name: "Nick",
  },
  {
    id: 2,
    name: "Sam",
  },
];
console.log(UserData);
const SpecificUser = UserData.filter((u) => u.id === 1);
console.log(SpecificUser);
const UserMap = UserData.map((u) => {
  return u.name;
});
console.log(UserMap);

//Objects type VarUser // ----------------------------------------------------------------------------- //
const Movies: {
  id: number;
  movie: string;
  rating?: string;
  reviews: number;
  isContinue: boolean;
} = {
  id: 1,
  movie: "Spider Man",
  //rating: "4/5", // if used '?' it is not Necessary
  reviews: 120,
  isContinue: false,
};
console.log(Movies);
console.log(Movies.isContinue + " " + typeof Movies.isContinue);

//Type Aliases // ----------------------------------------------------------------------------- //
type Locations = {
  id: number;
  state: string;
  city: string;
};

function Address(Address: Locations): any {
  console.log(Address);
}
const NewAdress = {
  id: 1,
  state: "Brook",
  city: "London",
};
Address(NewAdress);

//Optional Properties // ----------------------------------------------------------------------------- //
function Example1(name: string, age?: number) {
  return `Name: ${name} '' Age: ${age} `;
}
console.log(Example1("Enes", 23));
console.log(Example1("Enes")); // This return Age: undefined.

//Intersection Types  // ----------------------------------------------------------------------------- //
type User = {
  Userid: number;
  name: string;
};
type Product = {
  Productid: number;
  title: string;
};

type PersonandProduct = User & Product;

const PersonAndProduct: PersonandProduct = {
  Userid: 1,
  name: "Enes",
  Productid: 2,
  title: "Laptop",
};
console.log(PersonAndProduct);

//Unions  // ----------------------------------------------------------------------------- //
let myVar: string | number;
myVar = 2;
console.log(myVar);
myVar = "Test";
console.log(myVar);

const Items: (number | string)[] = [1, 2, 3, "Hello"];
console.log(Items);

//Literal Types // ----------------------------------------------------------------------------- //

//String Literal Types
let color: "black" | "blue" | "grey";
color = "black";
//color = "red"; //This red is not Type

//Number Literal Types
let number: 1 | 4 | 5;
number = 4;
//number = 3; //This 3 number is not Type

//Boolean Literal Types
let isTrue: true;
isTrue = true;
//isTrue = false //This false is not Type

//Tuples // ----------------------------------------------------------------------------- //
let Tuples1: [string, boolean] = ["Hello", true];
console.log(Tuples1[0]);
console.log(Tuples1[1]);

//Destructuring Individual Element
let Tuples2: [string, number] = ["Enes", 26];
let [TupleName, TupleAge] = Tuples2;
console.log(TupleName);
console.log(TupleAge);

//Enums  // ----------------------------------------------------------------------------- //

enum Days {
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}
function funcDays() {
  return `Yesterday ${Days.Friday}, Today ${Days.Saturday}, Tomorrow ${Days.Sunday}`;
}
console.log(funcDays());

//Class Properties Annotations  // ----------------------------------------------------------------------------- //
class Token {
  AccessToken: string;
  RefreshToken: string;
  constructor(AccessToken: string, RefreshToken: string) {
    this.AccessToken = AccessToken;
    this.RefreshToken = RefreshToken;
  }
}
const UserToken = new Token("Access", "Refresh");
console.log(UserToken);
console.log(UserToken.AccessToken);

//Access Modifiers  // ----------------------------------------------------------------------------- //
//Public
//Private
//Protected
class Persons {
  public name: string;
  private age: number;
  protected email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getAge(): number {
    return this.age;
  }
}
const ModifyUser = new Persons("Yone", 20, "Email");
console.log(ModifyUser.name);
// console.log(ModifyUser.age); //Property 'age' is private and only accessible within class 'Persons'
console.log(ModifyUser.getAge());
// console.log(ModifyUser.email); //Property 'email' is protected and only accessible within class 'Persons' and its subclasses.
class ModifyUsers extends Persons {
  constructor(name: string, age: number, email: string) {
    super(name, age, email);
  }
}
const ModifyUser2 = new ModifyUsers("Darius", 25, "email");
console.log(ModifyUser2);

//Getters & Setters // ----------------------------------------------------------------------------- //

class GSClass {
  private _GSProperty: number = 0;

  get GSProperty(): number {
    return this._GSProperty;
  }

  set GSProperty(value: number) {
    if (value < 0) {
      console.log("Value cannot be negative");
    } else {
      this._GSProperty = value;
    }
  }
}

const GSInstance = new GSClass();

console.log(`Current Value: ${GSInstance.GSProperty}`); // Current Value: 0
GSInstance.GSProperty = 10;
console.log(`Now Current Value ${GSInstance.GSProperty}`); // Current Value: 10
GSInstance.GSProperty = -1;

console.log(GSInstance.GSProperty); // Value cannot be negative and we will see 10 because current value 10
// I used console.log but uses throw new Error this console.log doesnt working and throw it error code

//Interface // ----------------------------------------------------------------------------- //

interface Server {
  name: string;
  ip: string;
  port: number;
}

const ServerExample: Server = {
  name: "Server-01",
  ip: "192.168.1.100",
  port: 8080,
};

console.log(ServerExample.name);
console.log(ServerExample.ip + `:` + ServerExample.port);

//
interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = (a, b) => a + b;
console.log(add(4, 5));
const subtract: MathOperation = (a, b) => a - b;
console.log(subtract(3, 2));

//
interface ServerInfo {
  name: string;
  ip: string;
  port: number;
  getInfo(ip: string, port: number): void;
}

function ExampleInfo(server: ServerInfo) {
  console.log(`${server.name} Ssh connected: ${server.ip}:${server.port}`);
  server.getInfo(server.ip, server.port);
}

const SVinfo: ServerInfo = {
  name: "Server-01",
  ip: "192.168.1.100",
  port: 22,

  // Two method here usual like function getInfo() or getInfo: () =>

  // getInfo(ip: string, port: number) {
  //   console.log(`Connection Function here: ${ip}:${port}`);
  // },
  getInfo: (ip: string, port: number) => {
    console.log(`Connection Function here: ${ip}:${port}`);
  },
};
ExampleInfo(SVinfo);

//
interface ServerDetails {
  readonly ip: string;
  readonly port: number;
  details: string;
}

interface ExtendServerDetails extends ServerDetails {
  id: number;
}

const Server02: ExtendServerDetails = {
  id: 1,
  ip: "192.168.1.99",
  port: 22,
  details: "Server Details ....",
};

// Server02.ip = '192.168.1.98' // Cannot assign to 'ip' because it is a read-only property ...
// Server02.port = 2222 // Cannot assign to 'port' because it is a read-only property ...
Server02.details = "Somethings details about Server";

console.log(Server02);

//
interface SshConnect {
  start(): void;
  stop(): void;
}

class ServerSsh implements SshConnect {
  start(): void {
    console.log("Start Function here!!");
  }
  stop(): void {
    console.log("Stop Function here!!");
  }
}

const newConnect = new ServerSsh();
newConnect.start();
newConnect.stop();

//Declaration Merging // ----------------------------------------------------------------------------- //

//Original interface
interface DecServerDetail {
  readonly ip: string;
  readonly port: number;
}

//Declaration merging (Interface extension)
interface DecServerDetail {
  details: string;
  start(ip: string, port: number): void;
  stop(ip: string, port: number): void;
}
const Server03: DecServerDetail = {
  ip: "192.168.1.98",
  port: 22,
  details: "Something else",
  start(ip, port) {
    console.log(`${ip}:${port} Ssh started`);
  },
  stop(ip, port) {
    console.log(`${ip}:${port} Ssh stopped`);
  },
};
Server03.start(Server03.ip, Server03.port);
Server03.stop(Server03.ip, Server03.port);

//Generics // ----------------------------------------------------------------------------- //

// Regular Func
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);
printString("Hello");
printNumber(3);
printBoolean(true);

//Generic Func
function printInfo<T>(x: T): T {
  return x;
}
const str = printInfo<string>("hello");
const num = printInfo<number>(3);
const bool = printInfo<boolean>(true);

console.log(str + " " + num + " " + bool);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(NumberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

interface Fruit {
  name: string;
  price: number;
}

const fruitArray: Fruit[] = [
  { name: "Apple", price: 120 },
  { name: "Banana", price: 200 },
  { name: "Orange", price: 180 },
];

function filterArrays<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const lowPriceFruits = filterArrays<Fruit>(
  fruitArray,
  (fruit) => fruit.price < 190
);
console.log(lowPriceFruits);

//Type Narrowing

// * Type guards
// * The instanceof operator
// * Intersection types

// Type guards
type Mytype = string | number;

function exampleFunction(value: Mytype): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
exampleFunction("hello world");
exampleFunction(10);

// Instanceof operator
class Cat {
  cat(): void {
    console.log("Meow");
  }
}
class AnimeGirl {
  animegirl(): void {
    console.log("uWu");
  }
}

function Sounds(sound: Cat | AnimeGirl) {
  if (sound instanceof Cat) {
    sound.cat();
  }
  if (sound instanceof AnimeGirl) {
    sound.animegirl();
  }
}
const MyCat = new Cat();
Sounds(MyCat); // Meow
const animegirl = new AnimeGirl();
Sounds(animegirl); // uWu

// Intersection types
type Employe = {
  id: number;
  name: string;
};

type Company = {
  department: string;
  role: string;
};

type CompanyWithEmploye = Employe & Company;

const Staff: CompanyWithEmploye = {
  id: 1,
  name: "Kayle",
  department: "IT",
  role: "staff",
};

console.log(
  Staff.id + " " + Staff.name + " " + Staff.department + " " + Staff.role
);
