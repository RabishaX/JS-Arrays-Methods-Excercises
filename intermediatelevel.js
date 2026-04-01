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
