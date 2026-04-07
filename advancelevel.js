// 1.1. Active Premium Users

// Problem:
// Filter users who are active AND have premium = true, then return only their names.

const ausers = [
  { name: "Alice", active: true, premium: false },
  { name: "Bob", active: true, premium: true },
  { name: "Charlie", active: false, premium: true }
];

const activeUser =  ausers.filter(function(auser){
    if(auser.active === true && auser.premium === true){
        console.log(auser.name);
        
    }
})
// Expected output:
// Bob

/*********************************************/

// 2. Total Price of In-Stock Products

// Problem:
// Filter products that are in stock, then calculate total price using map + logic.

const allproducts = [
  { name: "Phone", price: 500, inStock: true },
  { name: "Laptop", price: 1000, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];

const filProducts = allproducts.filter(function(prod){
    if (prod.inStock === true){
        return prod;
    }
});
const calProd = filProducts.map (function(calpro){
    return calProd.price
});
