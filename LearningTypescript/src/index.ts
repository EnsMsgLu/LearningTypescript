import { User } from './Types';
import { users, products, categories, paymentMethods } from './Data';
import example01 from './Examples/01';
import example02 from './Examples/02';
import example03 from './Examples/03';

// Example 01
let Users: User[] = [];
Users = users
    .filter((user) => ["admin", "user", "moderator"].includes(user.role)) // If the user have a role to other inject anything is cant include the array
    .map((user) => ({
      ...user,
      role: user.role as "admin" | "user" | "moderator"
    }));

console.log(Users[0]);
const user01 = example01(Users[0]);

console.log(user01.message);
console.log(example01(Users[1]).message);
console.log(example01(Users[2]));
console.log(example01(Users[3]).data.email);

// Example 02
// If on server we can response like this response.status(example02Response.status).json(example02Response.data)
const example02Response = example02(products, categories);
console.log(example02Response);
console.log(example02Response.data[0].products);
console.log(example02Response.data[1].products[1].name);

// Example 03
const example03Response = example03(products[0], paymentMethods[0], 1);
console.log(example03Response);
const example03Response2 = example03(products[1], paymentMethods[1], 2);
console.log(example03Response2);
const example03Response3 = example03(products[2], paymentMethods[2], 3);
console.log(example03Response3);
const example03Response4 = example03(products[3], paymentMethods[3], 0);
console.log(example03Response4);
