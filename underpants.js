// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// functional library

var _ = {};

/*
var _ = {
    identity: function(){

    },
    typeof: function() {

    },
}


*/

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
_.identity = function(value) {
    // return input value unchanged
    return value;
}

/** _.typeOfS
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
// takes in a value
// returns the typeof value

_.typeOf = function(value) {

    // check if value is string
    if (typeof (value) === 'string') {
        return typeof(value);
    }
    // check if value is number
    if (typeof (value) === 'number') {
        return typeof(value);
    }
    // check if value is function
    if (typeof (value) === 'function') {
        return typeof(value);
    }
    // check if value is boolean
    if (typeof (value) === 'boolean') {
        return typeof(value);
    }
    // check if value is undefined
    if (typeof (value) === 'undefined') {
        return typeof(value);
    }
    // check if value is array
    if (Array.isArray(value)) {
        return 'array';
    }
    // check if value is object
    if (typeof (value) === 'object' && !Array.isArray(value) && value !== null) {
        return typeof(value);
    }
    // check if value is null
    if (value === null) {
        return 'null';
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

_.first = function(array, num) {
    // if array is not an array
    if (!Array.isArray(array)) {
        // return empty array
        return [];
    // otherwise do this...
    } else { 
        // if num is undefined or if num is not a number...
        if (num === undefined || typeof num !== 'number') {
            // return first index of array
            return array[0];
        // otherwise do this...
        } else {
            // create storage array
            let result = [];
            // iterate over the array indexes as long as..
                // i is less than num and...
                    // i is less than the length of the array
            for (let i = 0; i < num && i < array.length; i++) {
                // push each index of array to result array
                result.push(array[i]);
            // return result array
            }  return result;
        }
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

_.last = function(array, num) {
    // if array is not an array
    if (!Array.isArray(array)) {
        // then return empty array p[]
        return [];
    // otherwise...
    } else {
        // if num is undefined or is not a number...
        if (num === undefined || typeof num !== 'number') {
            // return the last index of the array
            return array[array.length -1];
        // otherwise...
        } else {
            // if num is greater than array.length...
            if (num >= array.length) {
                return array;
            } // otherwise...
            // create storage array
            let result = [];
            // iterate through the array
                /// start at difference between array.length and num
                    // as long as i is less than array.length &&
                    // as long as i is greater than or equal to 0
                        //  i++
            for (let i = array.length - num; i < array.length && i >= 0; i++) {
                // add the value of array index to result array
                result.push(array[i]);
            }
            // return result
            return result;
        }
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
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if value === array[i]...
        if (value === array[i]) {
            // return i
            return i;
        }
    }
    // if value in array not found, return -1
    return -1;
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
    // initalize variable result to check if value is found in array (boolean value)
    let result;
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // if array[i] === value, set result to true - otherwise set result to false
        result = array[i] === value ? true : false;
        // if result is true, return result...
        if (result) {
            return result;
        }
    // otherwise return result
    } return result;
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
    // if collection is an array
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // invoke func
            func(collection[i], i, collection) 
        }
    }
    // if collection is an object
    if (typeof collection === 'object' && !Array.isArray(collection) && collection !== null) {
        // iterate through the collection
        for (let key in collection) {
            // invoke func
            func(collection[key], key, collection)
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
    // declare storage array
    let output = [];
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // on each iteration, invoke the indexOf function
            // indexOf will return -1 if array[i] is not found in output 
        // if invoking _.indexOf returns -1...
        if (_.indexOf(output, array[i]) === -1) {
            // push array[i] to output array
            output.push(array[i]);
        }
    // return output
    } return output;
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
    // declare result array
    let result = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // invoke func(element, i, array) on each array[i], if true push to result array
        if (func(array[i], i, array) === true) {
            // push array[i] to result array
            result.push(array[i]);
        }
    // return result array
    } return result;     
}







//////////////////////////////////////////////////////////////////////////////////////////

// filtering => taking a collection of data and returning a subset of that collection of the items that pass some type of test

// mapping => taking a collection of data and using a callback function to createa  new collection of modified values 

//////////////////////////////////////////////////////////////////////////////////////////







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
    // create false array
    let falseArr = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if func === false
        if (func(array[i], i, array) === false) {
            // push value of array[i] to falseArr
            falseArr.push(array[i]);
        }
    }
    // return falseArr
    return falseArr;
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
    // create two arrays for truthy & falsey results
    let trueResults = [];
    let falseResults = [];
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // if func is true...
        if (func(array[i], i, array) === true) {
            // push array[i] to trueResults
            trueResults.push(array[i]);
        } else {
            // otherwise... push to falseResults array
            falseResults.push(array[i]);
        }
    }
    // return array w trueResults and falseResults
    return [trueResults, falseResults];
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
    // create result array
    let result = [];
    // if collection is an array...
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // push value of invoking func to result
            result.push(func(collection[i], i, collection)) 
        }
    // otherwise...
    } else {
        // iterate through object
        for (let key in collection) {
            // push value of invoking func to result
           result.push(func(collection[key], key, collection));
        }
    }
    // return result
    return result;
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
    // create result array
    let result = [];
    // invoke _.map with the array as argument1 and function(obj) as argument 2
        // function(obj) will return the obj[property]
            // assign to result
    result = _.map(array, function(obj) {
         return obj[property];
    });
    // return result
    return result;
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
    // Initialize isTrue variable
    let isTrue = true;

    // if collection is an array..
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // if func is not defined...
            if (func === undefined) {
                // check if any collection[i] is a false value
                if (collection[i] === undefined || collection[i] === false || collection[i] === 0 || collection[i] === '' || collection[i] === null || Number.isNaN(collection[i])) {
                    // if false value is found, set isTrue to false
                    isTrue = false;
                    // end the loop if false value is found
                    break;
                }
            // if func is defined...
            } else {
                // invoke func on each element
                if (!func(collection[i], i, collection)) {
                    // if invoking func on an element returns false, set isTrue to false
                    isTrue = false;
                    // end the loop if false value is found
                    break;
                }
            }
        }
    // if collection is an object
    } else if (typeof collection === 'object' && collection !== null) {
        // iterate through the object
        for (let key in collection) {
            // if func is not defined...
            if (func === undefined) {
                // check if any collection[key] is a false value
                if (collection[key] === undefined || collection[key] === false || collection[key] === 0 || collection[key] === '' || collection[key] === null || Number.isNaN(collection[key])) {
                    // if false value is found, set isTrue to false
                    isTrue = false;
                    // break the loop if false value is found
                    break;
                }
            // if func is defined...
            } else {
                // if invoking the func on an element returns false
                if (!func(collection[key], key, collection)) {
                    // set isTrue to false
                    isTrue = false;
                    // end the loop if false value is found
                    break;
                }
            }
        }
    }
    // return isTrue 
    return isTrue;
};





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
    // create isTrue variable to check value
    let isTrue = false;
    // if collection is an array...
    if (Array.isArray(collection)) {
        // iterate through array
        for (let i = 0; i < collection.length; i++) {
            // if func is not defined
            if (func === undefined) {
                // check if element is truthy
                if (collection[i]) {
                    // if element is truthy, set isTrue to true
                    isTrue = true;
                    // break the loop
                    break;
                }
            // otherwise if func is provided...
            } else {
                // if invoking func on element returns true
                if (func(collection[i], i, collection)) {
                    // set isTrue to true
                    isTrue = true;
                    // break the loop
                    break;
                }
            }
        }
    // if collection is an object...
    } else if (typeof collection === 'object' && collection !== null) {
        // iterate through the collection
        for (let key in collection) {
            // if func is not defined
            if (func === undefined) {
                // if element is truthy
                if (collection[key]) {
                    // set isTrue to true
                    isTrue = true;
                    // break the loop
                    break;
                }
            // if func is defined....
            } else {
                // if invoking func on element is true...
                if (func(collection[key], key, collection)) {
                    // set isTrue to true
                    isTrue = true;
                    // break loop 
                    break;
                }
            }
        }
    }
    // return isTrue
    return isTrue;
};








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
    // create output variable (accumlating)
    let output;
    // if seed is undefined...
    if (seed === undefined) {
        // assign first element to output
        output = array[0];
        // iterate through array starting from second element
        for (let i = 1; i < array.length; i++) {
            // reassign output to result of invoking func
            output = func(output, array[i], i)
        }
    // if seed is defined...
    } else {
        // assign seed value to output
        output = seed;
        // iterate through array from first element
        for (let i = 0; i < array.length; i++) {
            // reassign output to the result of invoking func
            output = func(output, array[i], i) 
        }

    }
    // return output
    return output;
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

_.extend = function(object) {
    // iterate through arguments starting from the second argument
    for (let i = 1; i < arguments.length; i++) {
        // assigns current source object to argument[i]. used to reference current sourceObject whose properties will be copied to targetobject
        let sourceObj = arguments[i];
        // iterate through properties in sourceObj
        for (let key in sourceObj) {
            // copy each property to target object (object)
            object[key] = sourceObj[key];
        }

    }
    // return target object
    return object;
}

// function receives  objects
// function copyies properties from object 2 to object 1






//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}