///////////////////////////////////////
// Lecture: Hoisting
/*

// functions
calculateAge(1996); // function call works before or after declaration

// hoisting only works with function declaration
function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1996); //  function call works before or after declaration


//retirement(1990); // error

// function expression does not hoist
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1996); // works only after the function has been expressed


// variables
console.log(age); // undefined
var age = 26; 
console.log(age); // variable defined in global execution context

function foo() {
    console.log(age); //undefined
    var age = 65;
    console.log(age); // variable defined in a a different execution context
}

foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(b); // variable not within scope
    //console.log(c);
    console.log(a + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this); //window is the default obj

/*
calculateAge(1996);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // still resides in window obj
}
*/
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // this belong to john obj
        console.log(2016 - this.yearOfBirth);
    } 
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing
mike.calculateAge = john.calculateAge; 

mike.calculateAge();
*/
