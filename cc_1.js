// Task 1: Calculate the Tip
const bill = 275; // Example bill amount 
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

// Task 2: Outputs Details
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${total}.`)

// Task 3: Create a  Function
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
 }

 // Test the function with a bill value of $100
 const testbill = 100;
 console.log(`The tip for a bill of $${testbill} is $${calcTip(testbill)}.`);
 