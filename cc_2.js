//Task 1: Calcualting the Tip
let x = 75; //Bill Amount
let y = 50<= x <= 300 ? x * 0.20: x * 0.15 //calculating tip based on different conditions // Output:$11.25

//Task 2: Output Details
let z = x + y;
console.log(`The bill was $${x}, the tip was $${y}, and total $${z}`);

//Task 3: Creating a function 
function calculateTip (bill) {
    return bill > 100 ? bill * 0.15: bill * 0.20; // Calculating tip based on the given rule
}

let bill= 100;
let tip = calculateTip (bill);
let total = bill+tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and total $${total}`); //Output: $115

