//Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
function add (a) {
    return function(b){
      return a + b;
    }
}
//if we have a function f(a,b) , then the function after currying, will be transformed to f(a)(b).
console.log(add(3)(4));

//Let’s see currying in action:
function multiply(a,b){
    return a * b;
}
function currying(fn){
    return function(a){
        return function(b){
            return fn(a, b);
        }
    }
}
var curriedMultiply = currying(multiply);  
console.log(multiply(4, 3)); // Returns 12
console.log(curriedMultiply(4)(3)); // Also returns 12
//As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply, which takes in one parameter at a time.