/*
Arrow functions were introduced in the ES6 version of javascript. | They provide us with a new and shorter syntax for declaring functions.

Arrow functions can only be used as a function expression.
*/

//Let’s compare the normal function declaration and the arrow function declaration in detail:
var obj1 = {
    valueOfThis: function(){
        return this;
    }
}
var obj2 = {
    valueOfThis: () => {
        return this;
    }
}

console.log(obj1.valueOfThis()); // Will return the object obj1
console.log(obj2.valueOfThis()); // Will return window/global object

/*
The biggest difference between the traditional function expression and the arrow function, is the handling of the this keyword.

By general definition, the this keyword always refers to the object that is calling the function.

As you can see in the code above, obj1.valueOfThis() returns obj1, since this keyword refers to the object calling the function.

In the arrow functions, there is no binding of the this keyword.

The this keyword inside an arrow function, does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case.

Therefore, in the code above, obj2.valueOfThis() returns the window object.
*/