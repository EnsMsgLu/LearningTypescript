// This is the types control the data that we get from the database and if have any problem with the data we can catch it in the types

type User = {
  id: number;
  name: string;
  age: number;
  email?: string;
  verification: boolean;
  role: 'admin' | 'moderator' | 'user';
}

type Response = {
  message: string;
  status: number;
  data?: any;
}

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
}

type Category = {
  id: number;
  name: string;
  description?: string;
}

type PaymentMethod = {
  id: number;
  userId?: number;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

export { User, Response, Product, Category, PaymentMethod };