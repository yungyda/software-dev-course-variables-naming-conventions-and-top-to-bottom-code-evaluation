/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.
*/

// Declaring variables with clear and descriptive names
let customerName = "Alice";   // Previously unnamed variable
let itemCount = 5;            // Previously 'b'
let totalCost = 20;           // Previously 'c'

// Adding new variables to enhance clarity
let itemName = "books";       // New variable for the type of item
let pricePerItem = totalCost / itemCount;  // New variable for price per item

// Using string concatenation instead of template literals
let purchaseSummary = customerName + " bought " + itemCount + " " + itemName + " for a total of $" + totalCost + ". Each item costs $" + pricePerItem.toFixed(2) + ".";

console.log(purchaseSummary);
