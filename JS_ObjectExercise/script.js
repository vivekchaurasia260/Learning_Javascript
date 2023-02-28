////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function()
    {
        console.log(this.name.length);
    }
}

employee.nameLength();

////////////////////
// PROBLEM 2 //////
//////////////////

//Given the object
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    report: function()
    {
        alert("Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age);
    }
}

employee.report();

////////////////////
// PROBLEM 3 //////
//////////////////

//Given the object
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function()
    {
        var str = console.log(this.name.split(" ")[1]);
    }
}

employee.lastName();
