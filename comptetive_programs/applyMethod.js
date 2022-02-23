//call() method takes arguments separately whereas, apply() method takes arguments as an array.
function saySomething(message){
    return this.name + " is " + message;
}
var person4 = {name:  "John"};
console.log(saySomething.apply(person4, ["awesome"]));