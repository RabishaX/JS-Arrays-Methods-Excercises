// 1.List of Names
// Problem: Use forEach to print each user’s name from an array.

const users = ["Alice", "Bob", "Charlie"];

users.forEach(function(users){
    console.log(users)
});

// Expected output:

// Alice
// Bob
// Charlie

// **************************************************

// 2. Square Numbers
// Problem: Use map to create a new array with squares of numbers.

const numbers = [1, 2, 3, 4, 5];

const ans1 = numbers.map(function(numbers){
    return numbers * numbers;
});
console.log(ans1); 

//Expected output:

// [1, 4, 9, 16, 25]

// **************************************************

// 3.Filter Scores
// Problem: Use filter to get scores greater than 50.

const scores = [45, 67, 89, 34, 55];

const ans2 = scores.map(function(scores){
    if(scores > 50){
        return scores
    };
});
console.log(ans2);

// Expected output:

// [67, 89, 55]

// **************************************************

// 4.Find a Product
// Problem: Use find to locate a product named "Laptop".

const products = [{name: "Phone"}, {name: "Laptop"}, {name: "Tablet"}];

const ans3 = products.find(function(products){
    
        return products.name==="Laptop";
    
});
console.log(ans3);

// Expected output:

// {name: "Laptop"}

// **************************************************

// 5.Check Item Position
// Problem: Use indexOf to find the position of "Bob" in the array.

const names = ["Alice", "Bob", "Charlie"];

const ans4 = names.indexOf("Bob");

console.log(ans4);

// Expected output:

// 1

// **************************************************
