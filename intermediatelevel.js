// 1. Uppercase Names
// Problem: Use map to convert all names to uppercase.

const namee = ["Alice", "Bob", "Charlie"];

const uppercaseName = namee.map(function (names) {
  return names.toUpperCase();
});
console.log(uppercaseName);

// Expected output:

// ["ALICE", "BOB", "CHARLIE"]

/*********************************************/

// 2.Filter Even Numbers and Multiply
// Problem: Use filter to get even numbers, then map to double them.

const nums = [1, 2, 3, 4, 5, 6];

const evenNumbers = nums.filter(function (nums) {
  if (nums % 2 === 0) {
    return nums;
  }
});

const doubleNumbers = evenNumbers.map(function (numss) {
  return numss * 2;
});

console.log(doubleNumbers);

// Expected output:

// [4, 8, 12]

/*********************************************/

// 3.Print User Emails
// Problem: Use forEach to print all user emails from an array of objects.

const userss = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];

 userss.forEach(function(user){
  console.log(user.email);
});

// Expected output:

// alice@example.com
// bob@example.com

/*********************************************/

// 5.Find First Passing Score
// Problem: Use find to get the first score >= 60

const scoress = [45, 52, 61, 70];

const passingScore = scoress.find(function(score){
  if(score >= 60){
    return score;
  }
});
console.log(passingScore);
// Expected output:
// 61

/*********************************************/

// 6.Combine Names and Scores
// Problem: Map user names with their scores into strings only if score >= 60.

const stud = [
  {name: "Alice", score: 58},
  {name: "Bob", score: 65},
  {name: "Charlie", score: 72}
];

const stu = stud.map(function(stud){
   if (stud.score > 60){
     
    return stud.name + ":" + " " + stud.score;
    
  }
})
console.log(stu);

// Expected output:
// [ 'Bob: 65', 'Charlie: 72']

/*********************************************/

// 7.Pending High Priority Tasks
// Problem: Filter tasks that are not done and priority is "high", then map their titles.

const tasks = [
  {title: "Laundry", done: true, priority: "low"},
  {title: "Project", done: false, priority: "high"},
  {title: "Coding", done: false, priority: "medium"}
];

const filt = tasks.filter(function(task){
    if(task.priority === "high"){
      return task;
    }
})
const a = filt.map(function(filter){
  return filter.title
});
console.log(a);

// Expected output:

// ["Project"]

/*********************************************/


// 8.Find Product by Price Range
// Problem: Find the first product priced between 100–200.

const pro = [
  {name: "Phone", price: 99},
  {name: "Laptop", price: 1200},
  {name: "Headphones", price: 150}
];

const find = pro.find(function(prod){
  if (prod.price >= 100 && prod.price <= 200){
    return prod;
  }
})
console.log(find);

// Expected output:
// {name: 'Headphones', price: 150}

/*********************************************/










