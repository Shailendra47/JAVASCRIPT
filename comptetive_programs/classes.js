/*
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions.

They provide a new way of declaring constructor functions in javascript.
*/
//Below are the examples of how classes are declared and used:

// Before ES6 version, using constructor functions
function Student(name, rollNumber, grade, section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
}
// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
    return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}
let student1 = new Student("Vivek", 354, "6th", "A");
console.log(student1.getDetails());
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A
console.log("-------------------------------------------------");


// ES6 version classes
class Student01{
    constructor(name, rollNumber, grade, section){
        this.name = name;
        this.rollNumber = rollNumber;
        this.grade = grade;
        this.section = section;
    }
    // Methods can be directly added inside the class
    getDetails(){
        return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
    }
}
let student2 = new Student01("Garry", 673, "7th", "C");
console.log(student2.getDetails());
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C
/*
Key points to remember about classes:

-Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
-A class can inherit properties and methods from other classes by using the extend keyword.
-All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. Error will be thrown if the strict mode rules are not followed.
*/