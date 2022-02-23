var variable1 = 23;
let variable2 = 89;

function catchValues(){
    console.log(variable1);
    console.log(variable2);
    // Both the variables can be accessed anywhere since they are declared in the global scope
}
window.variable1; // Returns the value 23
window.variable2; // Returns undefined 

/*
The variables declared with the let keyword in the global scope behave just like the variable declared with the var keyword in the global scope.

Variables declared in the global scope with var and let keywords can be accessed from anywhere in the code.

But, there is one difference !

Variables that are declared with the var keyword in the global scope are added to the window/global object. Therefore, they can be accessed using window.variableName.

Whereas, the variables declared with the let keyword are not added to the global object, 
therefore, trying to access such variables using window.variableName results in an error.
*/