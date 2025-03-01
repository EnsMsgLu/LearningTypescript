import { Product, Category, Response } from '../Types';

// Example 02: Products and categories

// This example is to show how to group products by category  
// This is a simple example, but it can be improved by using a more complex algorithm
// For example, we can use a more complex algorithm to group products by category
// We can also use a more complex algorithm to group products by category


function Example02(products: Product[], categories: Category[]): Response { 
  try {
    let Products: Product[];
    // This is a simple example to map the products to the products array
    Products = products.map((product) => ({
      ...product,
    }));
    const Categories = categories.map((category) => ({
      name: category.name,
      products: [] as Product[] // This is a simple example to type the Product Array
    }));
    
    // This is a simple example to filter the products by each category
    // for(const category of Categories) is each category of Categories
    for(const category of Categories) {
      // category.products is the products of the category
      // Products.filter((product) => product.category === category.name) is the products of the category
      category.products = Products.filter((product) => product.category === category.name);
    };

    // This is a simple example to return the response
    return {
      message: 'Products and categories',
      status: 200,
      data: Categories,
    }
  } catch (error) {
    throw new Error('Error in Example02');
  }
};

export default Example02;