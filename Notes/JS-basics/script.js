/******************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var 3years = 3;
var _3years = 3;
var if = 23;
*/


/******************************
* Variables type coercion and mutation
*/
/*
var firstName = "John";
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he Married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he Married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/           

/******************************
* Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder =  ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);
*/

/******************************
* Operator Precednece
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Mutliple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Mulitple assingments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x = x * 2;
x *= 2;
console.log(x);
*/

/******************************
* CODING CHALLENGE 1
*/
/*
var massMark, massJohn, heightMark, heightJohn;
massMark = prompt('What is the mass of Mark?');
massJohn = prompt('What is the mass of John?');
heightMark = prompt('What is the height of Mark');
heightJohn = prompt('What is the height of John');

var bmiMark, bmiJohn, isMarkHigherBMI;
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
isMarkHigherBMI = bmiMark > bmiJohn;
console.log("Mark's BMI is " + bmiMark);
console.log("John's BMI is " + bmiJohn);
alert("Is Mark's BMI higher than Jonh's? " + isMarkHigherBMI);
*/

/******************************
* if else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';
    
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; //kg
var heightJohn = 1.69; // meters

var massJohn = 92; // kg
var heightMark = 1.95; // meters

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is " + bmiMark);
console.log("John's BMI is " + bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
}
else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/

/******************************
* if else statements
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // Between 20 and 30
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/******************************
* The ternary operator and switch statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operation
age >= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' dirnks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* // This is the expanded version of the ternary expr above
if (age >= 18) {
    var dirnk = 'beer';
} else {
    var drink = 'juice';
}


// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');       
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');        
}
*/

/******************************
* Truthy and Falsy values and equality operators
*/
/*
// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values. Anything that is considered true when evaluated in an if/else statement

var height = 0; // Test for nothing and 0 and ''
height = 23;

// Test a variable if it is defined
if (height || height === 0) { 
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
} 

// best practise to use === to prevent confusion
*/

/******************************
* CODING CHALLENGE 2
*/
/*
var avgScoreJohn = ( 89 + 120 + 20 ) / 3;
var avgScoreMike = ( 89 + 120 + 20 ) / 3;
var avgScoreMary = ( 89 + 120 + 20 ) / 3;

switch (true) {
    case avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary:
        console.log('John has the highest average score ' + avgScoreJohn);
        break;
    case avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary:
        console.log('Mike has the highest average team score of ' + avgScoreMike);
        break;
    case avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMike:
        console.log('Mary has the highest average team score of ' + avgScoreMary);
        break;
    case avgScoreJohn === avgScoreMike && avgScoreJohn === avgScoreMary:
        console.log ('All avg scores are the same. DRAW.');
        break;
    default:
        console.log('There is a draw');
}
*/

/******************************
* Functions
*/
/*
// function name (parameters)
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

//DRY: Dont repeat yourself. Use a function!

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' in years.');
    } else {
        console.log(firstName + ' is alrady retired.');
    }
    
}
    
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/******************************
* Functions statements and expressions
*/
/*
// Function declaration
// function whatDoYouDo(job,firstName) {}

// Function Expression
// *note: there is no need to put the break because 'return' exits out of the function
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));

// Expressions in Java always produces a result
// Statements performs actions: if/else, while, etc
*/

/******************************
* Arrays
*/
/*
// Initialize array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Arrays are zero based
console.log(names);
console.log(names.length);
console.log(names[0]);

// Mutate array
names[1] = 'Ben';
console.log(names);

// Add to array
names[5] = 'Mary';
console.log(names);
console.log(names.length);

// Different data types: string, number, boolean, etc
var john = ['John', 'Smith', 1990, 'teacher', false];

// Methods can be applied to arrays
john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(1990));
console.log(john.indexOf(23)); // Returns -1 if element does not exists
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
console.log(isDesigner);
*/

/******************************
* CODING CHALLENGE 3
*/
/*
function calcTip(bill) {
    var tip;
    if (bill < 50) {
        tip = bill * 0.2;
    } else if (bill < 200 && bill >= 50) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.10;
    }
    return tip;
}

var bill = [124, 48, 268];
var tips = [calcTip(bill[0]), 
            calcTip(bill[1]), 
            calcTip(bill[2]),];
var totalBill = [tips[0] + bill[0], 
                 tips[1] + bill[1], 
                 tips[2] + bill[2]];
console.log(tips);
console.log(totalBill);
*/

/******************************
* Objects and properties
*/
/*
// Arrays use [], objectsise {}
// Arrays order matter, in objects it does not
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// Accessing element from objects
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Changing elements in an obect
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Another way to express and initialize an object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/******************************
* Objects and methods
*/
/*
// this calls on properties of the object/function to where it is called
// this.age enables to create a new elements
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        // return 2019 - this.birthYear;
        this.age = 2019 - this.birthYear;
    }
};

// console.log(john.calcAge(1990));
// john.age = john.calcAge();
john.calcAge();
console.log(john);
*/

/******************************
* CODING CHALLENGE 4
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 25, // Kg
    height: 155, // cm
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 27, // Kg
    height: 160, // cm
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
    }
}
    
if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI of ' + mark.bmi)
} else {
    console.log(mark.firstName + ' and ' + john.lastName + ' has the same BMI of ' + john.bmi)
}
*/

































































































































