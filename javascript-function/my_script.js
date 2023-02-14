// function hello()
// {
//     console.log("hello world! ");
// } 

//function with parameter
// function helloYou(name)
// {
//     console.log("Hello " + name);
// }

// these args are loosely typed i.e, they were convert based on the value type passed.
// function addNum(num1, num2)
// {
//     console.log(num1 + num2)
// }

// default values : we can give default value in the function if no names called then it will take default
// function helloSomeone(name="Frankie")
// {
//     console.log("Hello " + name);
// }

// two default parameter
// If we are not returning then will get different output.
// function formal(name="Sam", title='Sir')
// {
//     //console.log(title + " " + name)
//     return title + " " + name;
// }

// function timeFive(numInput)
// {
//     // local scope to the function!
//     var result = numInput * 5;
//     return result; 
// }

// Global scope to the function!
var v = "GLOBAL VARIABLE";
var stuff = "GLOBAL STUFF";

function fun(stuff)
{
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}

fun();
console.log(stuff);





