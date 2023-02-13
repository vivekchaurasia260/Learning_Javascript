var firstName = prompt("First Name Please: ");
var lastName = prompt("Last Name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information!")

// Logic

// Four conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// NAME Condition
if(firstName[0] === lastName[0])
{
    nameCond = true;
}
else
{
    nameCond = false;
}


// AGE Condition
if(age > 20 && age < 30)
{
    ageCond = true;
}
else
{
    ageCond = false;
}

//HEIGHT Condition
if(height >= 170)
{
    heightCond = true;
}
else
{
    height = false;
}


// PET Name
if(petName[petName.length-1] === "y")
{
    petCond = true;
}
else
{
    petCond = false;
}

// CHECK ALL CONDITIONS
if(nameCond && ageCond && heightCond && petCond)
{
    console.log("WELCOME SPY!");
}
else
{
    console.log("Nothing to see here");
}
