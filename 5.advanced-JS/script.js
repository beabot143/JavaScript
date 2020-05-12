// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1996,
    job: 'teaacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    /*
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth);
    }
    
}

// new operator creates a new empty object and then the function is called
// which creates a new execution context that also has a this variable
// because of the 'new' operator, the 'this' points to the empty obj 
// created through the Person function instead of it pointing to the Global obj

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.type = 'human';

var john = new Person('John', 1996, 'teacher');
var jane = new Person('Jane', 1964, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/




// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });
*/




// Primitives vs. Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Ojects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 46;
console.log(obj1);
console.log(obj2);

// Functions
var age = 23;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 46;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/




///////////////////////////////////
// Lecture: Passing Functions as arguments
/*
var years = [1990, 1995, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return (2016 - el);
}

function isFullAge(el) {
    return (el >= 18);
}

function maxHeartRate(el) {
    if (el >=18 && el <=81) {
        return Math.round(206.9 -(0.67 * el));
    } else {
        return -1;
    }
    
}

//arraycalc(years, calculateAge());

// we dont want to call the calculateAge function here
// we want to call it later to be used inside the arraCalc function
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/




///////////////////////////////////
// Lecture: Functions Returning Functions
/*
function interviewQuestion(job) {
    if (job == 'designer') {
        return function(name) { // Anonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job == 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mary');
designerQuestion('Jane');
teacherQuestion('Mike');

// Another way of doing this is the
interviewQuestion('teacher')('Mark');
*/




///////////////////////////////////
// Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

// Another way of writting this by implementing IIFE
(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(4);
*/




///////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement';

    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
//retirement(66)(1985);
*/


// Coding Challenge implement interviewQuestion using the power of closures
/*
function interviewQuestion(job) {
    return function(name) {
        if (job == 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job == 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mary');
designerQuestion('Jane');
teacherQuestion('Mike');

// Using the power of closure, we were able to create cleaner code
// the inner function still had access to the job variable and was able to
// use this infomration to make decisions. Esseintially all the work is
// handled in the inner function
*/




///////////////////////////////////
// Lecture: Bind, Call, and Apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// Using the call method. This is called method borrowing. The first arguments will set the 'this' variable to point to the object passed.
john.presentation.call(emily, 'friendly', 'afternoon');

// Using the apply method. similar to call, but uses an array for the second argument
john.presentation.apply(emily, ['friendly', 'afternoon']);

// Using Bind method. Bind doesnt immediately call the function but instead genereates a copy of the function, so that we can store it somewhere. This can be extremely useful when dealing with preset arguments.
// The Bind method allows us to create a function with preset arguments
// This is called carrying.

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');
emilyFormal('night');

// Another Example of using the bind function
var years = [1990, 1995, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return (2016 - el);
}

function isFullAge(limit, el) {
    return (el >= limit);
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/





/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
(function () {
    function Question (question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;

        this.display = function () {
            console.log(this.question);
            for (var i = 0; i < this.choices.length; i++) {
                console.log(i + '. ' + this.choices[i]);        
            }
        }
    }

    Question.prototype.checkAnswer = function(input) {
        if (input == this.answer) {
            alert('You are correct!');
        } else {
            alert('Sorry, that was the incorrect answer.');
        }
    }
    
    var q1 = new Question('What is the capital of Ontario?', ['Toronto', 'Ottawa', 'Vancouver'], 0);
    var q2 = new Question('When is Christmas?', ['January 1st', 'July 16th', 'December 25th'], 2);
    var q3 = new Question('What are you?', ['Animal', 'Human', 'Plant'], 1);
    
    var arrQuestions = [q1, q2, q3];
    
    var index = Math.floor(Math.random() * arrQuestions.length);
    
    arrQuestions[index].display();
    
    var input = prompt('Please input the number of your answer below.');
    
    arrQuestions[index].checkAnswer(input);    
})();
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question (question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.choices.length; i++) {
            console.log(i + '. ' + this.choices[i]);        
        }
        console.log('\n');
    }

    Question.prototype.checkAnswer = function(input) {
        if (input === this.answer) {
            console.log('That is correct!');
            playerScore('correct');
        } else {
            console.log('That is the incorrect answer. Try Again :)');
            playerScore('incorrect');
        }
        
        console.log('-----------------------------------------');
    }

    Question.prototype.displayScore = function(score) {
        console.log('You hace a score of: ' + score());
    }
    
    function nextQuestion() {
        var index = Math.floor(Math.random() * arrQuestions.length);
        arrQuestions[index].displayQuestion();
        arrQuestions[index].displayScore(playerScore);
        var input = prompt('Please input the number of your answer below.\nEnter "exit" to stop the game.');
        if (input === 'exit') {
            console.log('Thank you for playing. Have a nice day!');
        } else {
            arrQuestions[index].checkAnswer(parseInt(input));
            nextQuestion();
        }
    }

    function score() {
        var sc = 0;
        return function playerScore(result) {
            if (result === 'correct') {
                sc++;
            }
            return sc;
        }
    }

    var q1 = new Question('What is the capital of Ontario?', ['Toronto', 'Ottawa', 'Vancouver'], 0);
    var q2 = new Question('When is Christmas?', ['January 1st', 'July 16th', 'December 25th'], 2);
    var q3 = new Question('What are you?', ['Animal', 'Human', 'Plant'], 1);
    
    var arrQuestions = [q1, q2, q3];

    var playerScore = score();

    nextQuestion();
})();






