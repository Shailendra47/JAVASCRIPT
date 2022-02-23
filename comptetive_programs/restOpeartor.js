/*
It provides an improved way of handling parameters of a function.

Using the rest parameter syntax, we can create functions that can take a variable number of arguments.

Any number of arguments will be converted into an array using the rest parameter.

It also helps in extracting all or some parts of the arguments.

Rest parameter can be used by applying three dots (...) before the parameters.
*/
function extractingArgs(...args){
    return args[1];
}

// extractingArgs(8,9,1); // Returns 9
function addAllArgs(...args){
    let sumOfArgs = 0;
    let i = 0;
    while(i < args.length){
        sumOfArgs += args[i];
        i++;
    }
    return sumOfArgs;
}
addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8
//**Note- Rest parameter should always be used at the last parameter of a function: