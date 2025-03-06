import { User, Response } from '../Types';

// Example 01: Check if the user is verified and return the user's name, role and data
function Example01(user: User): Response {
  try {
    if(!user.verification) {
      return {
        message: 'User is not verified',
        status: 401,
      }
    }
    else if (user.role === 'admin') {
      return {
        message: `You're an admin and ${user.name}`,
        status: 200,
        data: user,
      }
    }
    else if (user.role === 'moderator') {
      return {
        message: `You're an moderator and ${user.name}`,
        status: 200,
        data: user,
      }
    }
    else if (user.role === 'user') {
      return {
        message: `You're an user and ${user.name}`,
        status: 200,
        data: user,
      }
    }
    else {
      return {
        message: 'You are a guest',
        status: 200,
      } 
    }
  } catch (error) {
    throw new Error('Error in Example01');
  }
}
export default Example01;