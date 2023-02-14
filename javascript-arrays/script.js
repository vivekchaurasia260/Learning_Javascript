// Arrays are mutable.
// var countries = ['USA', 'Germany', 'France'];
// console.log(countries[2]);

// var test1 = "Hello World";
// console.log(test1[4]);

// immutable : String in javascript are immutable
// Ex:

// test1[4] = "x";
// console.log(test1);

// mixed datatype

// var mixed = [true, 30, "string"];
// console.log(mixed);
// console.log(mixed.length);

// basic and useful array methods

//var myArr = ['one', 'two', 'three'];

// removing method(last item)
// lastItem = myArr.pop();
// console.log(lastItem);

// console.log(myArr);

// inserting element in array.
// myArr.push("new_item");
//console.log(myArr);

// we can also retreive by using index.
//console.log(myArr[myArr.length - 1]);

// array matrix
// var matrix = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(matrix);

// Array Iteration
var arr = ["A", "B", "C"];

// Ist way
// for(var i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// 2nd way
// for(letter of arr)
// {
//     console.log(letter);
// }

// if we want to alert the user for every letter
// for(letter of arr)
// {
//     alert(letter);
// }

// by using forEach method
//arr.forEach(alert);

function addAwesome(name)
{
    console.log(name+ " is awesome!");
}

addAwesome("django");

var topics = ["pyhton", "django", "science"];
topics.forEach(addAwesome);

