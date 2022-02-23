//Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.
var Person = function(pName){
  var name = pName;
  this.getName = function(){
    return name;
  }
}
var person = new Person("Neelesh");
console.log(person.getName());

//Let’s understand closures by example:

function randomFunc(){
    var obj1 = {name1: "Vivian", age: 45};
    return function(){
        console.log(`${obj1.name1} is awesome, I'm ${obj1.age} years old.`); // Has access to obj1 even when the randomFunc function is executed
    }
}
var initialiseClosure = randomFunc(); // Returns a function
console.log(initialiseClosure());

/* Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. 
This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed. */

//This ability of a function to store a variable for further reference even after it is executed, is called Closure.