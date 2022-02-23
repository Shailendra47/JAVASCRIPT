//Spread operator (…)

/* Although the syntax of spread operator is exactly the same as the rest parameter, spread operator is used to spread an array, and object literals.
   We also use spread operators where one or more arguments are expected in a function call. */

function addFourNumbers(num1,num2,num3,num4){
    return num1 + num2 + num3 + num4;
}
let fourNumbers = [5, 6, 7, 8];
addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]

let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(obj1);

let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

/*
***Note- Key differences between rest parameter and spread operator:

Rest parameter is used to take a variable number of arguments and turns into an array while the spread operator takes an array or an object and spreads it

Rest parameter is used in function declaration whereas the spread operator is used in function calls.
*/