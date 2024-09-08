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
//Test
let bill= 100;
let tip= calculateTip (bill);
let total= bill+tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and total $${total}`); //Output: $115
 
//Task 4: Utilizing Arrays 
const bills = [275,40,430,125,555,44]; // Data set 1 and 2
const tips=bills.map(bill=> calculateTip(bill));
const totals= bills.map ((bill)=> bill + tips);
console.log ("bills:", bills); //Output:275,40,430,125,555,44
console.log("tips:",tips); //Output:41.25,6, 64.5, 18.75, 111, 6.6
console.log("totals:",totals); //Output:316.25,46, 494.5, 143.75, 666, 50.6
