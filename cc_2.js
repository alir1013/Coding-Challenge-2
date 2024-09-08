//Task 1: Calcualting the Tip
let bill= 75; //Bill Amount
let tip= 50<= 75 <= 300 ? bill * 0.20: bill * 0.15 //calculating tip based on different conditions // Output:$11.25

//Task 2: Output Details
let total= bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and total $${total}`);

//Task 3: Creating a function 
function calculateTip (bills) {return bills > 100 ? bills * 0.15: bills * 0.20; // Calculating tip based on the given rule
}
let bills= 100;
let tip= calculateTip (bills);
let total= bills+tip;
console.log(`The bill was $${bills}, the tip was $${tip}, and total $${total}`); //Output: $115



