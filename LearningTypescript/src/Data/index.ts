// This is the data for the examples you can imagine that this data is coming from a database.

const users = [
  {
    id: 1,
    name: 'John',
    age: 20,
    email: 'john@gmail.com',
    verification: true,
    role: 'admin',
  },
  {
    id: 2,
    name: 'Jane',
    age: 19,
    email: 'jane@gmail.com',
    verification: false,
    role: 'user',
  },
  {
    id: 3,
    name: 'Doe',
    age: 21,
    email: 'doe@gmail.com',
    verification: true,
    role: 'moderator',
  }, 
  {
    id: 4,
    name: 'Jane',
    age: 19,
    email: 'jane@gmail.com',
    verification: true,
    role: 'user',
  },
]

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    category: 'Category 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    category: 'Category 2',
    description: 'Description 2',
  },
  {
    id:3,
    name: 'Product 3',
    price: 300,
    category: 'Category 1',
    description: 'Description 3',
  },
  {
    id:4,
    name: 'Product 4',
    price: 400,
    category: 'Category 2',
    description: 'Description 4',
  },
  {
    id:5,
    name: 'Product 5',
    price: 500,
    category: 'Category 1',
  },
  {
    id:6,
    name: 'Product 6',
    price: 600,
    category: 'Category 2',
  }
] 

const categories = [
  {
    id: 1,
    name: 'Category 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Category 2',
    description: 'Description 2',
  },
  {
    id: 3,
    name: 'Category 3',
    description: 'Description 3',
  },
]

const paymentMethods = [
  {
    id: 1,
    userId: 1,
    cardNumber: '123456789012',
    cardHolder: 'John Doe',
    expirationDate: '01/25',
    cvv: '123',
  },
  {
    id: 2,
    userId: 2,
    cardNumber: '123456789012',
    cardHolder: 'Jane Doe',
    expirationDate: '01/25',
    cvv: '123',
  },
  {
    id: 3,
    userId: 3,
    cardNumber: '123456789012',
    cardHolder: 'John Doe',
    expirationDate: '01/25',
    cvv: '123',
  },
  {
    id: 4,
    cardNumber: '123456789012',
    cardHolder: 'Jane Doe',
    expirationDate: '01/25',
    cvv: '123',
  },
]

export { users, products, categories, paymentMethods };