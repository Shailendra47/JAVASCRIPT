//All javascript objects inherit properties from a prototype.

/* For example,
Date objects inherit properties from the Date prototype | Math objects inherit properties from the Math prototype | Array objects inherit properties from the Array prototype.

On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.

A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object. */

var arr = [];
arr.push(2);
console.log(arr); // Outputs [2]

/*
n the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.

The reason being the use of prototypes. As we discussed before, Array objects inherit properties from the Array prototype.

The javascript engine sees that the method push does not exist on the current array object and therefore, looks for 
the method push inside the Array prototype and it finds the method.

Whenever the property or method is not found on the current object, the javascript engine will always try to look in its prototype and if it still does not exist, 
it looks inside the prototype's prototype and so on.
*/