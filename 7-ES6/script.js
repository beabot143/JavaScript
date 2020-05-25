/////////////////////////////////////////
// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);

age5 = 24;
console.log(age5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;

age6 = 25; 
console.log(age6);

name6 = 'Jane Miller';
console.log(name6)
*/

/*
// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence6(true);
*/

/*
//ES5
console.log(title5);
var title5;

//ES6
console.log(title6);
let title6;
*/

/*
//ES5
var i = 23;

for (i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

//ES6
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/



/////////////////////////////////////////
// Lecture: Blocks and IIFEs

/*
{
    const a = 1;
    let b = 2;
}

console.log(a + b); //error

//ES5
(function() {
    var c = 1;
});

console.log(c); 
*/


/////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1996;

function calcAge(year) {
    let now = new Date;
    return (now.getFullYear( ) - year);
}

//E55
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); 
console.log(n.startsWith('j'));

console.log(n.endsWith('ith'));
console.log(n.endsWith('smi'));

console.log(n.includes('ohn'));
console.log(n.includes('wassap'));

console.log(n.repeat(5));
console.log(` ${n }`.repeat(5));
*/



/////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];
var now = new Date;
nowYear = now.getFullYear();

//ES5
var ages5 = years.map(function(el) {
    return (nowYear - el);
});
console.log(ages5);

//ES6
let ages6 = years.map(el => nowYear - el);
console.log(ages6);

// must parenthesis to separate first argument if there are more than one parameters
ages6 = years.map((el, index) => `Age element ${index + 1}: ${nowYear - el}.`);
console.log(ages6);

// must use curly brackets if there is more than one line of code
ages6 = years.map((el, index) => {
    age = nowYear - el;
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
*/


/////////////////////////////////////////
// Lecture: Arrow Functions

/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number ' + self.position + ' and it is ' + ' and it is ' + self.color + '.';
            alert(str);
        });
    }
}

box5.clickMe();


//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box66.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myfriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myfriends5(friends);

//ES6
Person.prototype.myfriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myfriends6(friends);
*/



////////////////////////////////////////
// Lecture: Desctructuring
/*
//ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

//ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// if we want to change the variable name we can do the following
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/



////////////////////////////////////////
// Lecture: Arrays 
/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue; //skips the iteration of this loop and moves on to the next
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed again to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/



////////////////////////////////////////
// Lecture: Spread Operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var ages = [18, 30, 12, 21];

//ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const max3 = addFourAges(...ages);
console.log(max3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/



////////////////////////////////////////
// Lecture: Rest Parameters
/*
//ES5
function isFullAge5() {
    console.log(arguments); //note that arguments not an array
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18);
    })
}

isFullAge5(1990, 2005, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 2005, 1965, 2016, 1987);
*/
/*
//ES5
function isFullAge5(limit) {
    console.log(arguments); //note that arguments not an array
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit);
    })
}

isFullAge5(21, 990, 2005, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(20, 1990, 2005, 1965, 2016, 1987);
*/


////////////////////////////////////////
// Lecture: Default Parameters
/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationanlity) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationanlity === undefined ? nationanlity = 'american' : nationanlity = nationanlity;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationanlity = nationanlity;
}

var john = new SmithPerson('John', 1990); 
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


//ES6
function ChadPerson (firstName, yearOfBirth, lastName = 'Smith', nationanlity = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationanlity = nationanlity;
};

var bob = new ChadPerson('Bob', 1999);
var ann = new ChadPerson('Ann', 1967, 'Pierre', 'French');
*/




////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong answer');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    question.delete(4);
} 
console.log(question.get('question'));
console.log(question.size);

/*
question.clear();
console.log(question.get('question'));
console.log(question.size);
*/
/*
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
   if (typeof(key) === 'number') {
       console.log(`Answer ${key}: ${value}`);
   }
}

const ans = parseInt(prompt('Write the correct Answer'));
console.log(question.get(ans === question.get('correct')));
*/




////////////////////////////////////////
// Lecture: Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {

    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
*/




////////////////////////////////////////
// Lecture: Sub Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

// must be written after the prototype chain has been established
Athelete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthelete5 = new Athelete5('John', 1990, 'swimmer', 3, 10);

johnAthelete5.calculateAge();
johnAthelete5.wonMedal();

//ES6
class Person6 {

    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {

    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

var johnAthelete6 = new Athelete6('John', 1990, 'swimmer', 3, 10);
johnAthelete6.calculateAge();
johnAthelete6.wonMedal();
*/


/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElement {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear =  buildYear;
    }
}

class Park extends TownElement { 

    constructor (name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area; //km^2
    }

    calcAge () {
        return new Date().getFullYear() - this.buildYear;
    }

    calcTreeDensity() {
        return (this.trees / this.area).toFixed(2);
    }
}

class Street extends TownElement {

    constructor (name, buildYear, length) {
        super(name, buildYear);
        this.length = length; //km
        this.setSize(this);
    }

    setSize(s) {
        var sizeMap = new Map();
        sizeMap.set(1, 'tiny');
        sizeMap.set(2, 'small');
        sizeMap.set(3, 'normal');
        sizeMap.set(4, 'big');
        sizeMap.set(5, 'huge');

        if (length > 0 && length <= 2) {
            s.size = sizeMap.get(1); // tiny
        } else if (length > 2 && length <= 5) {
            s.size = sizeMap.get(2); // small
        } else if (length > 5 && length <= 8) {
            s.size = sizeMap.get(3); // normal (default)
        } else if (length > 8 && length <= 12) {
            s.size = sizeMap.get(4); // big
        } else {
            s.size = sizeMap.get(5); // huge
        }
    }

}

parks = [
    new Park('Green Park', 1985, 777, 16), 
    new Park('National Park', 1960, 2000, 25), 
    new Park('Oak Park', 1990, 120, 12)
];

streets = [
    new Street('Ocean Avenue', 1999, 1),
    new Street('Evergreen Street', 2008, 7),
    new Street('4th Street', 2015, 4),
    new Street('Sunset Boulevard', 1982, 12)
];

function parkReport(p) {

    console.log('----------PARKS REPORT----------');
    console.log(`Our ${p.length} parks has an average of ${calcAvgParkAge()} years.`);

    // print list of parks with name and tree density
    p.forEach(park => console.log(` - ${park.name} has a density of ${park.calcTreeDensity()} trees per square km.`));

    // print list of parks that has more than 1000 trees
    p.forEach(park => {
        if (park.trees > 1000) {
            console.log(` * ${park.name} has more than 1000 trees.`);
        }
    });


    // --------- functions ---------- //
    function calcAvgParkAge () {
        let sum = 0;
        p.forEach(park => {
            sum += park.calcAge();
        });
        return (sum / p.length). toFixed(2);
    }
}

function streetReport(s) {

    console.log('----------STREETS REPORT----------');
    console.log(`Our ${s.length} has a total length of ${calcTotalLenth()} km, with with an average length of ${calcTotalLenth() / s.length} km.`);

    // print list of streets with its build year and size
    s.forEach(street => console.log(` - ${street.name}, build in ${street.buildYear}, is a ${street.size} street.`));


    // --------- functions ---------- //
    function calcTotalLenth() {
        sum = 0;
        s.forEach(street => sum += street.length);
        return sum;
    } 
}

parkReport(parks);
streetReport(streets);

