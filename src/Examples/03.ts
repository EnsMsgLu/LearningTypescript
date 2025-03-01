import { Product, PaymentMethod, User, Response } from '../Types';
import { users } from '../Data';
function Example03(product: Product, Payment: PaymentMethod, userId: number): Response {
  try {
    // Find the user by id
    const user = users.find((user) => user.id === userId);
    // Regex for the card number, expiration date and cvv
    const cardNumberregex = /^\d{12}$/;
    const expirationDateregex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvregex = /^\d{3}$/;

    // If the user not found
    if(!user) {
      return {
        message: 'User not found',
        status: 404,
      }
    }
    // If the user not verified
    else if(!user.verification) {
      return {
        message: 'User not verified',
        status: 401,
      }
    }
    // If the card number, expiration date and cvv is invalid
    else if(!cardNumberregex.test(Payment.cardNumber) && !expirationDateregex.test(Payment.expirationDate) && !cvvregex.test(Payment.cvv)) {
      return {
        message: 'Invalid card',
        status: 400,
      }
    }
    // If the user haven't this card
    else if(user.id !== Payment.userId) {
      return {
        message: 'User haven\'t this card please add this card before payment',
        status: 404,
      }
    }
    // If the payment is successful
    else {
      // You can do import payment.ts here
      return {
        message: `Payment of ${product.name} was successful with ${product.price}`,
        status: 200,
      }
    }
  } catch (error) {
    throw new Error('Error in Example03');
  }
}

export default Example03;