/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

YOUR 3 CHALLENGES
Change the game to follow these rules

1. A player looses his ENTIRE score when he rolls two 6 in a row.AFter that it's the next player's
turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input feild to the HTML where players can se the winning score, so that they can change 
the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This
is a good opportunity to use google to figure this out).
3. Add another dice to the game so that there are two dices now. The player loses his current score 
when one if them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the 
code for the first one).

*/

var scores, roundScore, activePlayer, gamePlaying;
var previousDice;

init();

//document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function() {// Anonymous function. By writting this way this function can onlye be used here
    

    if (gamePlaying) {

        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1; // declare here such that the dice scope is only accesible here
        var dice2 = Math.floor(Math.random() * 6) + 1; // declare here such that the dice scope is only accesible here
        
        /* From Challenge 1
        var dice = Math.floor(Math.random() * 6) + 1; // declare here such that the dice scope is only accesible here
        var currentDice = dice; 
        */

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Implement dice play rules
        if(dice1 !== 1 && dice2 !==1) { 
            // Add score, display score
            roundScore += dice1 + dice2; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // active player loses score, changes to next player
            nextPlayer();
        }
        
        /* From challenge 1
        if (currentDice === 6 && previousDice === 6) {
            // set entire current and global score to 0
            console.log("dice 6 has been rolled twice in a row");
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }

        previousDice = currentDice;
        */

    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Add current score to the global score
        scores[activePlayer] += roundScore;

        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        console.log(input);

        // recall that undefined, 0, null, or "" are COERCED to false
        // anything else is coerced to true
        if(input) {
                var winningScore = input;
        }
        else {
            winningScore = 100;
        }

        // 3. Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})


document.querySelector('.btn-new').addEventListener('click', init);


function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // can be player 0 or player 1

    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none'; // use . for class. style atribute. css property: display. set to 'none'

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}


function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


// DOM object that will give us access to the HTML document is the document object
//document.querySelector('#current-' + activePlayer).textContent = dice; // use # for ID
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; // getter: reads the element and stores it to x
//console.log(x);
