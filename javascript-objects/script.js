// Javascript object are hash-tables, they store information in a key-value pair.
// In other language this is sometimes also called dictionary.
// Unlike an array JS Object does not retain any ordering.
// The typical JS object is in the form :
// {key1: "value1", key2: "value2"....};
// You can access values through their corresponding key
//

// There is no specific order or insertion order is not preserved in object.
// var carInfo = {make: "Toyota", year: 1990, model: "Camry"};
// console.log(carInfo);
// console.log(carInfo["make"]);

// for(key in carInfo)
// {
//     console.log(key);
//     console.log(carInfo[key]);
// }


// var myNewO = {a: "Hello", b: [1,2,3], c: {inside: ['a', 'b']}};
// console.log(myNewO["a"])
// console.log(myNewO["b"][1]);
// console.log(myNewO["c"]["inside"][0]);

// this keyword
//Ex:

// var myObj = {
//     prop: 37,
//     reportProp: function() {
//         return this.prop;
//     }
// };
// console.log(myObj.reportProp());
// console.dir(myObj);

var myObj = {
    name : "Sirius",
    greet : function() {
        console.log("Hello " + this.name);
    }
}

myObj.greet();