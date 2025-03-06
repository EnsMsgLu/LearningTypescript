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
