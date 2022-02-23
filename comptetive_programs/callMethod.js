function sayHello(){
    return "Hello " + this.name;
}
var obj = {name: "Sandy"};
console.log(sayHello.call(obj));     
// Returns "Hello Sandy"
//call() method allows an object to use the method (function) of another object.
 
//call() accepts arguments:
function saySomething(message){
    return this.name + " is " + message;
}
var person4 = {name:  "John"};
console.log(saySomething.call(person4, "awesome"));
// Returns "John is awesome"    