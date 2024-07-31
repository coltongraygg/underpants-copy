// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (value) {
    // array case
    if (Array.isArray(value)) {
        return 'array';
    // null case
    } else if (value === null) {
        return 'null'
    // all other cases
    } else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // output variable only used for default case
    let output = [];
    // if number is negative or if array isnt an array, return empty array
    if (number < 0 || !Array.isArray(array)) {
        return [];
        // if number is greater than array length
    } else if (number > array.length) {
        // return array
        return array;
        // if number is not given or NaN
    } else if (number === undefined || isNaN(number)) {
        // return first element in array
        return array[0];
    // all other cases
    } else { 
        // iterate through array up to number value
        for (let i = 0; i < number; i++) {
            // push array[i] value to output 
            output.push(array[i]);
        }
        // return output
        return output;
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    let output = [];
    // if number is negative or if array isnt an array, return empty array
    if (number < 0 || !Array.isArray(array)) {
        return [];
    // if number is greater than array length
    } else if (number > array.length) {
        return array;
    // if number is undefined or NaN
    } else if (number === undefined || isNaN(number)) {
        return array[array.length - 1];
        // return last x number of items in array
    } else {
        // default case
        // iterate through array in reverse, starting at number value
        for (let i = number; i > 0; i--) {
            // add array[i] value to beginning of output array
            output.unshift(array[i]);
        }
        return output;
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // declare result to be used for our return statement later on
    let result;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // search for a match
        if (array[i] === value) {
            // assign result to i value
            result = i;
            // stop the iteration
            break;
        }
    }
    // if no match was found
    if (isNaN(result)) {
        // assign result to -1
        result = -1;
    }
    // return result
    return result;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // declare variable isFound - useful later on
    let isFound;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // search for a match
        if (array[i] === value) {
            // initialize isFound with true value and stop iteration
            isFound = true;
            break;
        }
    }
    // if isFound is true, return true - otherwise false
    return isFound ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    // initialize output array
    let output;
    // array case
    if (Array.isArray(collection)) {
        // iterate through array & add result of invoking function to output
        for (let i = 0; i < collection.length; i++) {
            output += func(collection[i], i, collection);
        }
    // object case
    } else {
        // iterate through object & add result of invoking function to output
        for (let key in collection) {
            output += func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // initialize output as empty array
    let output = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if the current value of array[i] is not in output array - add it, otherwise do nothing and continue iterations
        if (_.indexOf(output, array[i]) === -1) {
            output.push(array[i]);
        }
    }
    return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // create output array
    let output = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if invoking func on element, index, and array is true
        if (func(array[i], i, array)) {
            // push array[i] to output array
            output.push(array[i]);
        }
    }
    // return output
    return output;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    // initialize empty array output
    let output = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
        // if invoking func is false, push array[i] to output array
        if (!func(array[i], i, array)) {
            output.push(array[i]);
        }
    }
    // return output
    return output;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // stores truthy values
    let trueArr = [];
    // stores falsey values
    let falseArr = [];
    // result array
    let resultArr = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // true case
        if (func(array[i], i, array)) {
            trueArr.push(array[i]);
        // false case
        } else if (!func(array[i], i, array)) {
            falseArr.push(array[i]);
        }
    }
    // return resultArr concatenated with trueArr and falseArr both being sub arrays
    return resultArr.concat([trueArr], [falseArr]);
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    // initialize output as empty array
    let output = [];
    // array case
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // assign result to return value of invoking func
            let result = func(collection[i], i, collection);
            // add result value to output array
            output.push(result);
        }
    // object case
    } else {
        // iterate through object
        for (let key in collection) {
            // assign result to return value of invoking func
            let result = func(collection[key], key, collection);
            // add result value to output array
            output.push(result);
        }
    }
    // return output
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    // pluckMap is going to iterate through our array of objects and for each element it will return the value of property from each object
    let pluckMap = _.map(array, function(obj) {
        return obj[property];
    });
    return pluckMap;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // if function is not provided
    if (typeof func !== 'function') {
        // iterate through object
        for (let key in collection) {
            // if element is falsey return false
            if (!collection[key]) {
                return false;
            }
        }
        // if all elements are true, return true
        return true;
    }

    // array case
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // if element is falsey return false
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }
    // object case
    } else {
        // iterate through object
        for (let key in collection) {
            // if element is falsey return false
            if (!func(collection[key], key, collection)) {
                return false;
            }
        }
    }
    // if all elements are truthy 
    return true;
}

// _.every([1, 2, 3]); // true (because every item is truthy)
// _.every([1, undefined, 3]); // false (because one item is falsey)
// _.every({ a: 1, b: 2 }); // true (because all of the values are truthy)
// _.every({ a: null, b: 2}); // false (because of the values if falsey)

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    // native value of booleanFlag 
    let booleanFlag = false;
    // if func is provided
    if (func) {
        // array case
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // if invoking func returns true end loop and return booleanFlag value
                if (func(collection[i], i, collection)) {
                    booleanFlag = true;
                    break;
                }
            }
        // object case
        } else {
            // iterate through object
            for (let key in collection) {
                // if invoking func returns true end loop and return booleanFlag value
                if (func(collection[key], key, collection)) {
                    booleanFlag = true;
                }
            }
        }
    // if func is not provided
    } else {
        // array case
        if (Array.isArray(collection)) {
            // iterate through array
            for (let i = 0; i < collection.length; i++) {
                // if element value is truthy end loop and return booleanFlag value
                if (collection[i]) {
                    booleanFlag = true;
                    break;
                }
            }
        // object case
        } else {
            for (let key in collection) {
                // if element value is truthy end loop and return booleanFlag value
                if (collection[key]) {
                    booleanFlag = true;
                    break;
                }
            }
        }
    }
    // return value of booleanFlag
    return booleanFlag;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    // hasSeed is used to check if seed is provided
    let hasSeed = seed !== undefined;
    // funcValue1 will hold values for first iterations results and results for invoking func
    let funcValue1;
    // temporarily holds value for funcValue1
    let previousValue;
    // seed was provided
    if (hasSeed) {
        // iterate through array
        for (let i = 0; i < array.length; i++) {
            // first iteration case
            if (i === 0) {
                // invoke func and assign result to funcValue1
                funcValue1 = func(seed, array[i], i);
            } else {
                // assign previousValue to funcValue1
                previousValue = funcValue1;
                // assign result of invoking func to funcValue1
                funcValue1 = func(previousValue, array[i], i);
            }
        }
    // seed not provided
    } else {
        // iterate through array
        for (let i = 0; i < array.length; i++) {
            // first iteration case
            if (i === 0) {
                // assign funcValue1 to value at first array index
                funcValue1 = array[i];
            } else {
            // other iterations after
                // assign previousValue to value at funcValue1
                previousValue = funcValue1;
                // assign funcValue1 to return value when invoking func
                funcValue1 = func(previousValue, array[i], i);
            }
        }
        
    }
    // return final value at funcValue1
    return funcValue1;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(destination) {
    // iterate over each argument skipping the destination argument
    for (let i = 1; i < arguments.length; i++) {
        // assign object to current argument object
        let object = arguments[i];
        // iterate over properties in object
        for (let key in object) {
            // check if current object has a key
            if (object.hasOwnProperty(key)) {
                // assign object's key value pair to destination object
                destination[key] = object[key];
            }
        }
    }
    return destination;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}