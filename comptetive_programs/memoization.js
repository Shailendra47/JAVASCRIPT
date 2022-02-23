/* Memoization is a form of caching where the return value of a function is cached based on its parameters. 
If the parameter of that function is not changed, the cached version of the function is returned. */

/*
**Note- Memoization is used for expensive function calls but in the following example, 
        we are considering a simple function for understanding the concept of memoization better.
*/
function addTo256(num){
    return num + 256;
}
console.log(addTo256(20)); // Returns 276
console.log(addTo256(40)); // Returns 296
console.log(addTo256(20)); // Returns 276
console.log("---");

/*
In the code above, we have written a function that adds the parameter to 256 and returns it.

When we are calling the function addTo256 again with the same parameter (“20” in the case above), we are computing the result again for the same parameter.

Computing the result with the same parameter again and again is not a big deal in the above case, but imagine if the function does some heavy duty work, then, computing the result again and again with the same parameter will lead to wastage of time.

This is where memoization comes in, by using memoization we can store(cache) the computed results based on the parameters. If the same parameter is used again while invoking the function, instead of computing the result, we directly return the stored (cached) value.

Let’s convert the above function addTo256, to a memoized function:
*/

function memoizedAddTo256(){
    var cache = {};
    return function(number){
        if(number in cache){
            console.log("cached value");
            return cache[number]
        }
        else{
            cache[number] = number + 256;
            return cache[number];
        }
    }
}
var memoizedFunc = memoizedAddTo256();
console.log(memoizedFunc(20)); // Normal return 276
console.log(memoizedFunc(20)); // Cached return cached value 276
/*

In the code above, if we run memoizedFunc function with the same parameter, instead of computing the result again, it returns the cached result.

**Note- Although using memoization saves time, it results in larger consumption of memory since we are storing all the computed results.
*/